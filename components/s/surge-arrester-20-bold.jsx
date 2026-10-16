import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnyhe2b8p.css';
import '../../css/p/p6jgddt-c.css';
import '../../css/q/qkdmk_b2j.css';
import '../../css/t/tc3h9blnl.css';
import '../../css/z/zu19_yban.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnyhe2b8p"/><path class="p6jgddt-c"/><path class="qkdmk_b2j"/><path class="tc3h9blnl"/><path class="zu19_yban"/>`,
		"fallback": "energy-icons:surge-arrester-20-bold",
	});
}

export default Component;
