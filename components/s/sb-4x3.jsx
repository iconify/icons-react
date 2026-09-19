import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbk05b36b.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/szds-jbsj.css';
import '../../css/b/bf5zruazm.css';
import '../../css/s/s6w3i8sdl.css';
import '../../css/f/f3_-twbek.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="nv9qcacyl"><path class="szds-jbsj"/><path class="bf5zruazm"/><path class="s6w3i8sdl"/><path class="f3_-twbek"/></g>`,
		"fallback": "flag:sb-4x3",
	});
}

export default Component;
