import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6c7wlb1d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6c7wlb1d"/>`,
		"fallback": "fa7-solid:wand-sparkles",
	});
}

export default Component;
