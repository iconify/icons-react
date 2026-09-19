import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2_a8x_yr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2_a8x_yr"/>`,
		"fallback": "carbon:watson-machine-learning",
	});
}

export default Component;
