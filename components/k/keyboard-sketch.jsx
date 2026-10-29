import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qdi26uumk.css';
import '../../css/z/z0uikzb1u.css';
import '../../css/e/eutcltbzm.css';
import '../../css/h/hbi65rbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qdi26uumk"/><path class="wm-a z0uikzb1u"/><path class="eutcltbzm wm-k"/><path class="hbi65rbll wm-a"/></g>`,
		"fallback": "withicons:keyboard-sketch",
	});
}

export default Component;
