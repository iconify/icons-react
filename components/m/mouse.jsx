import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlx2_7l6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlx2_7l6b"/>`,
		"fallback": "bi:mouse",
	});
}

export default Component;
