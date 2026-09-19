import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpga2ccyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpga2ccyh"/>`,
		"fallback": "icon-park-outline:screen-rotation",
	});
}

export default Component;
