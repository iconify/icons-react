import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqk-f2dc.css';
import '../../css/l/lp2190qyz.css';
import '../../css/x/x-pf1hz3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqk-f2dc"/><path class="lp2190qyz"/><path class="x-pf1hz3a"/>`,
		"fallback": "solar:shield-warning-bold-duotone",
	});
}

export default Component;
