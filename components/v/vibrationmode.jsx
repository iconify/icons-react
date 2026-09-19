import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqd6qpbht.css';
import '../../css/b/bbpo9lb1d.css';
import '../../css/p/pe1khgbxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqd6qpbht"/><path class="bbpo9lb1d"/><path class="pe1khgbxq"/>`,
		"fallback": "fxemoji:vibrationmode",
	});
}

export default Component;
