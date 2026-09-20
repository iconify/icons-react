import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh5g9vpdn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh5g9vpdn"/>`,
		"fallback": "teenyicons:star-outline",
	});
}

export default Component;
