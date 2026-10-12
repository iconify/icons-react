import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca2dzib3m.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/n/nkey1hxgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ca2dzib3m"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="nkey1hxgs"/></g>`,
		"fallback": "andrsrxn:prohibit",
	});
}

export default Component;
