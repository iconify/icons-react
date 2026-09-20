import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxim2_bax.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxim2_bax"/>`,
		"fallback": "teenyicons:linux-alt-outline",
	});
}

export default Component;
