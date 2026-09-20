import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ossn1lbdl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ossn1lbdl"/>`,
		"fallback": "simple-line-icons:paper-clip",
	});
}

export default Component;
