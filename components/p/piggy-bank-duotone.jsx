import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztg_-s51d.css';
import '../../css/a/aoooa44wu.css';
import '../../css/e/e5m_iacxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztg_-s51d"/><path class="aoooa44wu"/><path class="e5m_iacxq"/></g>`,
		"fallback": "lucide-extended:piggy-bank-duotone",
	});
}

export default Component;
