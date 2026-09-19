import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kql266bwv.css';
import '../../css/y/yceptjbfi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kql266bwv"/><path class="yceptjbfi"/>`,
		"fallback": "carbon:touch-interaction",
	});
}

export default Component;
