import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iffldhtcp.css';
import '../../css/k/kg5a_oiaz.css';
import '../../css/n/nf4n3pbtz.css';
import '../../css/z/ztqke8b5k.css';
import '../../css/j/jg7e4sfmu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iffldhtcp"/><path class="kg5a_oiaz"/><path class="nf4n3pbtz"/><path class="ztqke8b5k"/><path class="jg7e4sfmu"/></g>`,
		"fallback": "streamline-flex-color:lock-rotation",
	});
}

export default Component;
