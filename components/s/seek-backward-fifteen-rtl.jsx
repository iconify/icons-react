import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7fotrofa.css';
import '../../css/c/cvoblb3gp.css';
import '../../css/m/m3big068d.css';
import '../../css/g/gcivmrb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="h7fotrofa"/><path class="cvoblb3gp"/><path class="m3big068d"/><path class="gcivmrb6c"/></g>`,
		"fallback": "andrsrxn:seek-backward-fifteen-rtl",
	});
}

export default Component;
