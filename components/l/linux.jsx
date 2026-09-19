import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bav46-0mx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bav46-0mx"/>`,
		"fallback": "fa6-brands:linux",
	});
}

export default Component;
