import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgwvay-0n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgwvay-0n"/>`,
		"fallback": "teenyicons:up-outline",
	});
}

export default Component;
