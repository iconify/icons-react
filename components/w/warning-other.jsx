import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxj_3jtzx.css';
import '../../css/t/t18caz0-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxj_3jtzx"/><path class="t18caz0-h"/>`,
		"fallback": "carbon:warning-other",
	});
}

export default Component;
