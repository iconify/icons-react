import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz0hutb1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz0hutb1x"/>`,
		"fallback": "streamline-plump:sail-ship",
	});
}

export default Component;
