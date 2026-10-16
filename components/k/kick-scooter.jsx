import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt8s04bmo.css';
import '../../css/d/dce751b7x.css';
import '../../css/z/zi5ucf-wc.css';
import '../../css/s/sci8kxxjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gt8s04bmo"/><circle class="dce751b7x"/><circle class="zi5ucf-wc"/><path class="sci8kxxjz"/></g>`,
		"fallback": "andrsrxn:kick-scooter",
	});
}

export default Component;
