import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ep_-cqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ep_-cqc"/>`,
		"fallback": "noviair-light:speaker",
	});
}

export default Component;
