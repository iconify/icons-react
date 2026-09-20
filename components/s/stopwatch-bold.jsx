import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs9_h7bln.css';
import '../../css/n/ni31jpbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs9_h7bln"/><path class="ni31jpbcz"/>`,
		"fallback": "streamline-ultimate:stopwatch-bold",
	});
}

export default Component;
