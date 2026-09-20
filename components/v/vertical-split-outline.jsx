import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pio5sybgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pio5sybgp"/>`,
		"fallback": "lsicon:vertical-split-outline",
	});
}

export default Component;
