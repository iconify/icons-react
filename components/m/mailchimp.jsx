import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8u7_hugl.css';
import '../../css/e/e9di-eb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8u7_hugl"/><path class="e9di-eb1o"/>`,
		"fallback": "bxl:mailchimp",
	});
}

export default Component;
