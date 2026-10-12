import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw996hyuo.css';
import '../../css/l/l_qsh6r9b.css';
import '../../css/z/zpssp-omq.css';
import '../../css/e/eikh2e2wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sw996hyuo"/><path class="l_qsh6r9b"/><rect transform="rotate(-90 6.64 5.59)" class="zpssp-omq"/><path class="eikh2e2wu"/></g>`,
		"fallback": "andrsrxn:paste",
	});
}

export default Component;
