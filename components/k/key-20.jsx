import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhrs8tbov.css';
import '../../css/r/rc9exabgm.css';
import '../../css/o/otv_07rxt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhrs8tbov"/><path class="rc9exabgm"/><path class="otv_07rxt"/>`,
		"fallback": "energy-icons:key-20",
	});
}

export default Component;
