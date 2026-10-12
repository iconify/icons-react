import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecpnxtbzc.css';
import '../../css/h/hwxoqsybz.css';
import '../../css/q/qf1cubdaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ecpnxtbzc"/><path class="hwxoqsybz"/><path class="qf1cubdaz"/></g>`,
		"fallback": "lucide-extended:paint-roller-duotone",
	});
}

export default Component;
