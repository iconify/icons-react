import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcrbt8b4m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcrbt8b4m"/>`,
		"fallback": "fa7-brands:visual-studio",
	});
}

export default Component;
