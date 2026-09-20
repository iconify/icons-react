import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl-yckb_r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl-yckb_r"/>`,
		"fallback": "teenyicons:trend-down-outline",
	});
}

export default Component;
