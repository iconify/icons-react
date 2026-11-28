import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymekm1b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymekm1b-n"/>`,
		"fallback": "noviair-light:lock",
	});
}

export default Component;
