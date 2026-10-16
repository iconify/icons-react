import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zewwvmbhq.css';
import '../../css/w/w65ibub9r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zewwvmbhq"/><path class="w65ibub9r"/>`,
		"fallback": "energy-icons:paper-mill-20-bold",
	});
}

export default Component;
