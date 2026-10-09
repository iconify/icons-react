import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjfhqgb9t.css';
import '../../css/f/fxj0yabdo.css';
import '../../css/z/z69o9sb6b.css';
import '../../css/p/pqgtaob0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjfhqgb9t"/><path class="fxj0yabdo"/><path class="z69o9sb6b"/><path class="pqgtaob0r"/>`,
		"fallback": "energy-icons:vacuum-48",
	});
}

export default Component;
