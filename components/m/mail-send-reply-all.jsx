import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kdr-e6yva.css';
import '../../css/l/ll1rs5_xj.css';
import '../../css/h/h-xuk081f.css';
import '../../css/t/twottnbxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kdr-e6yva"/><path class="ll1rs5_xj"/><path class="h-xuk081f"/><path class="twottnbxl"/></g>`,
		"fallback": "streamline-plump-color:mail-send-reply-all",
	});
}

export default Component;
