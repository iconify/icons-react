import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7j-npjlx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7j-npjlx"/>`,
		"fallback": "qlementine-icons:shakers-16",
	});
}

export default Component;
