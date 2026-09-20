import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upz5ji1nn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upz5ji1nn"/>`,
		"fallback": "teenyicons:list-layout-outline",
	});
}

export default Component;
