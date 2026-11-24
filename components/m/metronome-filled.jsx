import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq_yc_azc.css';
import '../../css/r/rq0x_wbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq_yc_azc"/><path class="rq0x_wbbr"/>`,
		"fallback": "lucide-extended:metronome-filled",
	});
}

export default Component;
