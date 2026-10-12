import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqr_vry8b.css';
import '../../css/s/sffewob_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kqr_vry8b"/><path class="sffewob_q"/></g>`,
		"fallback": "lucide-extended:video-duotone",
	});
}

export default Component;
