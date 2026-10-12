import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6g8_acwx.css';
import '../../css/x/xsuc560co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6g8_acwx"/><path class="xsuc560co"/></g>`,
		"fallback": "lucide-extended:timeline-duotone",
	});
}

export default Component;
