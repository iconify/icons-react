import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saqybxb0m.css';
import '../../css/h/hr6f-e6aq.css';
import '../../css/u/ub8xjbcqz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saqybxb0m"/><path class="hr6f-e6aq"/><circle class="ub8xjbcqz"/>`,
		"fallback": "ooui:user-temporary-location-rtl",
	});
}

export default Component;
