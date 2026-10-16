import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjny1bchv.css';
import '../../css/x/xpq7hmt-u.css';
import '../../css/x/xyw2m9brw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjny1bchv"/><path class="xpq7hmt-u"/><path class="xyw2m9brw"/>`,
		"fallback": "energy-icons:text-size-48-bold",
	});
}

export default Component;
