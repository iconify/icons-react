import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uba5k61oh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uba5k61oh"/>`,
		"fallback": "memory:necklace",
	});
}

export default Component;
