import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5xw19b4x.css';
import '../../css/j/ji7_itbgv.css';
import '../../css/k/kj_vf-_kl.css';
import '../../css/m/m-p2dze3c.css';
import '../../css/d/dpxfbyb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g5xw19b4x"/><path class="ji7_itbgv"/><path class="kj_vf-_kl"/><path class="m-p2dze3c"/><path class="dpxfbyb9d"/></g>`,
		"fallback": "streamline-ultimate-color:notes-upload",
	});
}

export default Component;
