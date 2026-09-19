import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcq-3vtmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcq-3vtmb"/>`,
		"fallback": "iconoir:three-stars",
	});
}

export default Component;
