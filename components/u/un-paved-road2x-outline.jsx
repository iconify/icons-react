import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yszikpxfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yszikpxfw"/>`,
		"fallback": "healthicons:un-paved-road2x-outline",
	});
}

export default Component;
