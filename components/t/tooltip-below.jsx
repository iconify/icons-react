import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyc2w9b7x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyc2w9b7x"/>`,
		"fallback": "memory:tooltip-below",
	});
}

export default Component;
