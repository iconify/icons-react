import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc0ef1bqm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc0ef1bqm"/>`,
		"fallback": "radix-icons:magnifying-glass",
	});
}

export default Component;
