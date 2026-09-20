import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xv_7bqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xv_7bqt"/>`,
		"fallback": "lsicon:lightning-outline",
	});
}

export default Component;
