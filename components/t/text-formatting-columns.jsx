import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8hp-10jk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8hp-10jk"/>`,
		"fallback": "streamline-block:text-formatting-columns",
	});
}

export default Component;
