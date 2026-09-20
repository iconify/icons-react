import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnae_cc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnae_cc0a"/>`,
		"fallback": "uit:subject",
	});
}

export default Component;
