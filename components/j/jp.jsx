import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/p/pub-fjbzw.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l88qm1qag"/><circle class="pub-fjbzw"/></g>`,
		"fallback": "cif:jp",
	});
}

export default Component;
