import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr32dwnzs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr32dwnzs"/>`,
		"fallback": "teenyicons:send-up-outline",
	});
}

export default Component;
