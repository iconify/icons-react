import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i79j4xzwx.css';
import '../../css/h/hc_zcwc_j.css';
import '../../css/e/edh-75b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i79j4xzwx"/><path class="hc_zcwc_j"/><path class="edh-75b4r"/></g>`,
		"fallback": "lucide-extended:truck-duotone",
	});
}

export default Component;
