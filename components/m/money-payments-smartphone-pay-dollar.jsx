import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekdmi3b6m.css';
import '../../css/l/l3_41-7cz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekdmi3b6m"/><path class="l3_41-7cz"/>`,
		"fallback": "streamline-pixel:money-payments-smartphone-pay-dollar",
	});
}

export default Component;
