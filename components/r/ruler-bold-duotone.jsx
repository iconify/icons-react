import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syxr9ro7o.css';
import '../../css/g/gw1678bzd.css';
import '../../css/x/xv1u012ry.css';
import '../../css/i/i4zmraclp.css';
import '../../css/c/ctlol9lzf.css';
import '../../css/k/k1nx9sbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syxr9ro7o"/><path class="gw1678bzd"/><path class="xv1u012ry"/><path class="i4zmraclp"/><path class="ctlol9lzf"/><path class="k1nx9sbcb"/>`,
		"fallback": "solar:ruler-bold-duotone",
	});
}

export default Component;
