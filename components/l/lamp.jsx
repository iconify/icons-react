import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dhgjklnhw.css';
import '../../css/t/t82gntoqc.css';
import '../../css/t/tp56nsd6v.css';
import '../../css/a/a-aisvbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dhgjklnhw wm-shadow"/><path class="t82gntoqc wm-shadow"/><path class="tp56nsd6v"/><path class="a-aisvbxb"/></g>`,
		"fallback": "withicons-brutal:lamp",
	});
}

export default Component;
