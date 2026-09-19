import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szy1pmb9g.css';
import '../../css/d/d0-9ecbzz.css';
import '../../css/g/gt4_nnbnq.css';
import '../../css/z/zjjkwlb6x.css';
import '../../css/e/ew2elo9xn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szy1pmb9g"/><path class="d0-9ecbzz"/><path class="gt4_nnbnq"/><path class="zjjkwlb6x"/><path class="ew2elo9xn"/>`,
		"fallback": "fxemoji:watch",
	});
}

export default Component;
