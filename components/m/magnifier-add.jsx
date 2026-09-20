import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfoah-o_i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfoah-o_i"/>`,
		"fallback": "simple-line-icons:magnifier-add",
	});
}

export default Component;
