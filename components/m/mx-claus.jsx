import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqt_u6rht.css';
import '../../css/d/dtidujbir.css';
import '../../css/t/t5aa6zazt.css';
import '../../css/l/l3g7hkpgh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqt_u6rht"/><path class="dtidujbir"/><path class="t5aa6zazt"/><path class="l3g7hkpgh"/>`,
		"fallback": "fluent-emoji-high-contrast:mx-claus",
	});
}

export default Component;
