import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z48inlb-m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z48inlb-m"/>`,
		"fallback": "fa7-solid:person-walking-arrow-loop-left",
	});
}

export default Component;
