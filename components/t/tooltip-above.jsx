import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibh-pxvmw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibh-pxvmw"/>`,
		"fallback": "memory:tooltip-above",
	});
}

export default Component;
