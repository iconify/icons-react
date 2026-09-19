import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcvn6yb_s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcvn6yb_s"/>`,
		"fallback": "foundation:trophy",
	});
}

export default Component;
