import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf8g6jb6t.css';
import '../../css/v/vhosuvb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf8g6jb6t"/><path class="vhosuvb4j"/>`,
		"fallback": "solar:stars-2-bold",
	});
}

export default Component;
