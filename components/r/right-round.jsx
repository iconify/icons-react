import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeyjrzb1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeyjrzb1w"/>`,
		"fallback": "icons8:right-round",
	});
}

export default Component;
