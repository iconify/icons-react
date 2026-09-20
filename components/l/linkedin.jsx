import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikpp05bgn.css';
import '../../css/t/ta9uhpgzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikpp05bgn"/><path class="ta9uhpgzx"/>`,
		"fallback": "uim:linkedin",
	});
}

export default Component;
