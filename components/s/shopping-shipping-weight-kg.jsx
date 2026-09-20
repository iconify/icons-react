import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slg6w6aek.css';
import '../../css/m/mt5r81b_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slg6w6aek"/><path class="mt5r81b_j"/>`,
		"fallback": "streamline-pixel:shopping-shipping-weight-kg",
	});
}

export default Component;
