import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn5otgbzl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn5otgbzl"/>`,
		"fallback": "oi:resize-both",
	});
}

export default Component;
