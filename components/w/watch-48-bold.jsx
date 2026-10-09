import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nowsdr-3b.css';
import '../../css/x/xaxgc568e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nowsdr-3b"/><path class="xaxgc568e"/>`,
		"fallback": "energy-icons:watch-48-bold",
	});
}

export default Component;
