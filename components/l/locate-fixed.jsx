import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c1y2d4b8i.css';
import '../../css/n/nzqc9xi7w.css';
import '../../css/f/fqcx83brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c1y2d4b8i"/><path class="nzqc9xi7w"/><path class="fqcx83brm"/></g>`,
		"fallback": "withicons-bauhaus:locate-fixed",
	});
}

export default Component;
