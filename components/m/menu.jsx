import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbefc9bxc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbefc9bxc"/>`,
		"fallback": "lineicons:menu",
	});
}

export default Component;
