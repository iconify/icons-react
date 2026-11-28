import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exwoq60zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exwoq60zg"/>`,
		"fallback": "noviair-light:podcast-play",
	});
}

export default Component;
