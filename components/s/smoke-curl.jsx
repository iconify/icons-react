import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_i2abbz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_i2abbz"/>`,
		"fallback": "pinhead:smoke-curl",
	});
}

export default Component;
