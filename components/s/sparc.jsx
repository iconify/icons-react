import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqse9p3cn.css';

const viewBox = {"width":286,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqse9p3cn"/>`,
		"fallback": "file-icons:sparc",
	});
}

export default Component;
