import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/javv36f_m.css';
import '../../css/s/s44bm75jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="javv36f_m"/><path class="s44bm75jf"/>`,
		"fallback": "streamline-ultimate:launch-go-bold",
	});
}

export default Component;
