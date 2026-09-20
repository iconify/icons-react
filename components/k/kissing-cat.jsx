import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9i8f50fi.css';
import '../../css/b/btdwznbdt.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mbnqul_uo.css';
import '../../css/g/g55uyl9fg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9i8f50fi"/><path class="btdwznbdt"/><g class="ij2x_72vy"><path class="mbnqul_uo"/><path class="g55uyl9fg"/></g>`,
		"fallback": "openmoji:kissing-cat",
	});
}

export default Component;
