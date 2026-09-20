import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh-pk_b0s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh-pk_b0s"/>`,
		"fallback": "teenyicons:receipt-outline",
	});
}

export default Component;
