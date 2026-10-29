import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ae206tbtt.css';
import '../../css/c/cg-lnu7pb.css';
import '../../css/z/zrzjcwbuq.css';
import '../../css/q/q4pv1lb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ae206tbtt"/><path class="cg-lnu7pb wm-s"/><path class="wm-k zrzjcwbuq"/><path class="q4pv1lb0v wm-s"/></g>`,
		"fallback": "withicons:phone-missed-sketch",
	});
}

export default Component;
