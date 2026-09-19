import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naz42fb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naz42fb1e"/>`,
		"fallback": "boxicons:plane-land",
	});
}

export default Component;
