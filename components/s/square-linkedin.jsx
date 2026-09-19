import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shqpe6bme.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shqpe6bme"/>`,
		"fallback": "fa7-brands:square-linkedin",
	});
}

export default Component;
