import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbplkjbyq.css';
import '../../css/k/kwxt7-bcd.css';
import '../../css/t/tdhbxpx_j.css';
import '../../css/d/dl1372b_m.css';
import '../../css/k/kuelw2b8c.css';
import '../../css/v/v0eeut-rm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbplkjbyq"/><path class="kwxt7-bcd"/><path class="tdhbxpx_j"/><path class="dl1372b_m"/><path class="kuelw2b8c"/><path class="v0eeut-rm"/>`,
		"fallback": "ion:ios-eye-off",
	});
}

export default Component;
