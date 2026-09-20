import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh14dfj_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh14dfj_a"/>`,
		"fallback": "qlementine-icons:quality-4-16",
	});
}

export default Component;
