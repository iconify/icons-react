import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cppjm0jfh.css';
import '../../css/m/mz0wy9bse.css';
import '../../css/w/wangxwr8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cppjm0jfh"/><path class="mz0wy9bse"/><path class="wangxwr8d"/>`,
		"fallback": "energy-icons:pipe-wrench-48",
	});
}

export default Component;
