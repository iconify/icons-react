import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npcnnqygr.css';
import '../../css/y/y657y2b9g.css';
import '../../css/y/yaksh6b1a.css';
import '../../css/b/bjuc6qztz.css';
import '../../css/m/m1b6egb1z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npcnnqygr"/><path class="y657y2b9g"/><circle class="yaksh6b1a"/><circle class="bjuc6qztz"/><path class="m1b6egb1z"/>`,
		"fallback": "openmoji:sun-with-face",
	});
}

export default Component;
