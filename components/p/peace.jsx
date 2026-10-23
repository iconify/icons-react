import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3t99xblo.css';
import '../../css/n/ns12ifbja.css';
import '../../css/a/abok11xzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3t99xblo"/><path class="ns12ifbja"/><path class="abok11xzs"/></g>`,
		"fallback": "andrsrxn:peace",
	});
}

export default Component;
