import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4md5kkgf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4md5kkgf"/>`,
		"fallback": "fa6-solid:martini-glass-empty",
	});
}

export default Component;
