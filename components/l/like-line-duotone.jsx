import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/a3-li-bcv.css';
import '../../css/v/vcmhjlbvo.css';
import '../../css/o/oopp9ccbj.css';
import '../../css/l/las78regp.css';
import '../../css/x/xmgyv7k4a.css';
import '../../css/x/xprygsf1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><g class="mc2zb0bvp"><path class="a3-li-bcv"/><path class="vcmhjlbvo"/></g><path class="oopp9ccbj"/><path class="las78regp"/><path class="xmgyv7k4a"/><path class="xprygsf1c"/></g>`,
		"fallback": "solar:like-line-duotone",
	});
}

export default Component;
