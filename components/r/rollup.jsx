import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iml59opdl.css';

const viewBox = {"width":387,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iml59opdl"/>`,
		"fallback": "file-icons:rollup",
	});
}

export default Component;
