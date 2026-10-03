import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffpz238lq.css';
import '../../css/b/bj_k-fngv.css';
import '../../css/m/m1jzmcc2r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ffpz238lq"/><rect class="bj_k-fngv"/><rect class="m1jzmcc2r"/>`,
		"fallback": "thesvg:levelrail",
	});
}

export default Component;
