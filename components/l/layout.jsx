import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc599u7ic.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc599u7ic"/>`,
		"fallback": "radix-icons:layout",
	});
}

export default Component;
