import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-0vqqb8n.css';
import '../../css/z/z056yni2z.css';
import '../../css/b/b3t-2tbol.css';
import '../../css/m/mer0f0bpl.css';
import '../../css/d/dpsiiab0r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGgUNRoefK" class="e-0vqqb8n"/></defs><path class="z056yni2z"/><path class="b3t-2tbol"/><path class="mer0f0bpl"/><use href="#SVGgUNRoefK"/><use href="#SVGgUNRoefK" class="dpsiiab0r"/>`,
		"fallback": "openmoji:keyboard",
	});
}

export default Component;
