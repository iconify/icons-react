import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-cr1kbtc.css';
import '../../css/j/ji6lv2bxm.css';
import '../../css/a/aqsuay1um.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-cr1kbtc"/><path class="ji6lv2bxm"/><path class="aqsuay1um"/>`,
		"fallback": "energy-icons:switch-open-20-bold",
	});
}

export default Component;
