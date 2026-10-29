import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vmolxdb4q.css';
import '../../css/l/lnqcukl8z.css';
import '../../css/y/y29_0ek2z.css';
import '../../css/c/c8h1ppbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vmolxdb4q wm-k"/><path class="lnqcukl8z wm-a"/><path class="y29_0ek2z"/><path class="c8h1ppbad"/></g>`,
		"fallback": "withicons-bauhaus:utensils-crossed",
	});
}

export default Component;
