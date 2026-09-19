import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya7p8kszo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya7p8kszo"/>`,
		"fallback": "cbi:lit-house-number",
	});
}

export default Component;
