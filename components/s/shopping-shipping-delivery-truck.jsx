import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7ooaebqk.css';
import '../../css/t/tqod06aih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7ooaebqk"/><path class="tqod06aih"/>`,
		"fallback": "streamline-pixel:shopping-shipping-delivery-truck",
	});
}

export default Component;
