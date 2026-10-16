import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9awjfzyj.css';
import '../../css/f/f7niv6bbj.css';
import '../../css/f/figjuehvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9awjfzyj"/><path class="f7niv6bbj"/><path class="figjuehvv"/>`,
		"fallback": "energy-icons:lidar-48-bold",
	});
}

export default Component;
