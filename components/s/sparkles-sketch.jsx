import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/isrgybm3a.css';
import '../../css/z/zorbjqvlv.css';
import '../../css/i/i0x2epj0c.css';
import '../../css/p/pzgabacqd.css';
import '../../css/z/z4znsyo7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="isrgybm3a"/><path class="wm-k zorbjqvlv"/><path class="i0x2epj0c wm-a"/><path class="pzgabacqd wm-k"/><path class="wm-a z4znsyo7g"/></g>`,
		"fallback": "withicons:sparkles-sketch",
	});
}

export default Component;
