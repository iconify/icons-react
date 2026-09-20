import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8oh0_brq.css';
import '../../css/z/zb1p0hbcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8oh0_brq"/><path class="zb1p0hbcy"/>`,
		"fallback": "selfhst:orange-isp",
	});
}

export default Component;
