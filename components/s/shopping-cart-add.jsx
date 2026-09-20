import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooj_07b2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooj_07b2k"/>`,
		"fallback": "streamline-plump:shopping-cart-add",
	});
}

export default Component;
