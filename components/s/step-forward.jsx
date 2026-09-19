import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2umil-pm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2umil-pm"/>`,
		"fallback": "fa7-solid:step-forward",
	});
}

export default Component;
