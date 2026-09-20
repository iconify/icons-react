import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/z/z3mr_0bdb.css';
import '../../css/y/y4ud7h78k.css';
import '../../css/g/ghnrqje-t.css';
import '../../css/h/ht860ybqd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="z3mr_0bdb"/><g transform="translate(-210 -1)"><path class="y4ud7h78k"/><circle class="ghnrqje-t"/><path class="ht860ybqd"/></g></g>`,
		"fallback": "system-uicons:sun",
	});
}

export default Component;
