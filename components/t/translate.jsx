import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l9ji29bjl.css';
import '../../css/r/rvykhok8p.css';
import '../../css/z/zujlmjbyq.css';
import '../../css/i/ic93-05sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l9ji29bjl"/><path class="rvykhok8p"/><path class="zujlmjbyq"/><path class="ic93-05sp"/></g>`,
		"fallback": "hugeicons:translate",
	});
}

export default Component;
