import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptga7ebrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ptga7ebrx"/>`,
		"fallback": "nrk:media-agelimit-9",
	});
}

export default Component;
