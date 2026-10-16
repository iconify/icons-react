import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8e0leq0r.css';
import '../../css/q/q1_5-_7tc.css';
import '../../css/a/at0_quf1s.css';
import '../../css/w/wmb9_e4hg.css';
import '../../css/b/bvarigeyo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8e0leq0r"/><path class="q1_5-_7tc"/><path class="at0_quf1s"/><path class="wmb9_e4hg"/><path class="bvarigeyo"/>`,
		"fallback": "energy-icons:surge-arrester-20",
	});
}

export default Component;
