import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uijlhrkqx.css';
import '../../css/u/uca8vin3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uijlhrkqx"/><path class="uca8vin3m"/></g>`,
		"fallback": "andrsrxn:selection-cursor",
	});
}

export default Component;
