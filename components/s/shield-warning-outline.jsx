import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp2190qyz.css';
import '../../css/x/x-pf1hz3a.css';
import '../../css/j/j020-w2mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp2190qyz"/><path class="x-pf1hz3a"/><path clip-rule="evenodd" class="j020-w2mj"/>`,
		"fallback": "solar:shield-warning-outline",
	});
}

export default Component;
