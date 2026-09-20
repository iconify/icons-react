import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3cg6w9vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3cg6w9vn"/>`,
		"fallback": "qlementine-icons:sliders-horizontal-16",
	});
}

export default Component;
