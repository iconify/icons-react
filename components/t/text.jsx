import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr0u-obfa.css';
import '../../css/q/qoypj_b7u.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr0u-obfa"/><path class="qoypj_b7u"/>`,
		"fallback": "formkit:text",
	});
}

export default Component;
