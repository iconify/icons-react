import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkrfzvbns.css';
import '../../css/l/l24jhwj-r.css';
import '../../css/f/fluce_b-m.css';
import '../../css/b/b1j359zmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zkrfzvbns"/><path class="l24jhwj-r wm-a"/><path class="fluce_b-m wm-k"/><path class="b1j359zmm wm-a"/></g>`,
		"fallback": "withicons:switch-camera-sketch",
	});
}

export default Component;
