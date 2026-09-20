import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tps7xibhf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tps7xibhf"/>`,
		"fallback": "radix-icons:tokens",
	});
}

export default Component;
