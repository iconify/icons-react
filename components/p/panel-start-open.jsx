import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg7-85tex.css';
import '../../css/b/b0inqk82a.css';
import '../../css/t/taxp9r11k.css';
import '../../css/n/nzgthsbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hg7-85tex"/><rect transform="rotate(-180 9.35 21.21)" class="b0inqk82a"/><rect transform="rotate(-180 21.27 21.21)" class="taxp9r11k"/><path class="nzgthsbjk"/></g>`,
		"fallback": "andrsrxn:panel-start-open",
	});
}

export default Component;
