import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e8egfvxpw.css';
import '../../css/m/m-rtzozyv.css';
import '../../css/r/rxailpbig.css';
import '../../css/k/khtt6hbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="e8egfvxpw"/><path class="m-rtzozyv"/><path class="rxailpbig"/><circle transform="rotate(-180 37.176 10)" class="khtt6hbix"/></g>`,
		"fallback": "icon-park:s-turn-right",
	});
}

export default Component;
