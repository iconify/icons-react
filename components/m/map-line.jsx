import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samjwxe8w.css';
import '../../css/l/ld6t_4zkh.css';
import '../../css/v/vymb4pe7n.css';
import '../../css/u/u8l40qmxj.css';
import '../../css/c/cf2__xswq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 samjwxe8w"/><path class="clr-i-outline clr-i-outline-path-2 ld6t_4zkh"/><path class="clr-i-outline clr-i-outline-path-3 vymb4pe7n"/><path class="clr-i-outline clr-i-outline-path-4 u8l40qmxj"/><path class="cf2__xswq clr-i-outline clr-i-outline-path-5"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-line",
	});
}

export default Component;
