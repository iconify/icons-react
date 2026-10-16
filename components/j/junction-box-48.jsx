import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya_ke-i5o.css';
import '../../css/v/vliuxwelf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya_ke-i5o"/><path class="vliuxwelf"/>`,
		"fallback": "energy-icons:junction-box-48",
	});
}

export default Component;
