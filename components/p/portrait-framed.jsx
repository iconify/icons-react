import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww7cfhb8u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww7cfhb8u"/>`,
		"fallback": "temaki:portrait-framed",
	});
}

export default Component;
