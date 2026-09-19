import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg9j1xb1g.css';
import '../../css/c/cft1j_bkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg9j1xb1g"/><path class="cft1j_bkt"/>`,
		"fallback": "fxemoji:moyai",
	});
}

export default Component;
