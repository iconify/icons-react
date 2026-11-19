import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8lgyzbnq.css';
import '../../css/e/eym9e8bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8lgyzbnq"/><path class="eym9e8bmo"/></g>`,
		"fallback": "andrsrxn:road",
	});
}

export default Component;
