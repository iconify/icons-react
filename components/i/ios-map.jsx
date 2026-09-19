import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p22exlb2q.css';
import '../../css/s/stmks3bbg.css';
import '../../css/t/tpw__yb9r.css';
import '../../css/k/k3wk1kf1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p22exlb2q"/><path class="stmks3bbg"/><path class="tpw__yb9r"/><path class="k3wk1kf1t"/>`,
		"fallback": "ion:ios-map",
	});
}

export default Component;
