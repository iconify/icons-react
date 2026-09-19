import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw068u8kk.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw068u8kk"/><path class="wx-066bcp"/>`,
		"fallback": "carbon:transform-instructions",
	});
}

export default Component;
