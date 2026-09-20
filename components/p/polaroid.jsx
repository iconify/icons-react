import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/k7885bg-u.css';
import '../../css/k/khk7plbbe.css';
import '../../css/g/g0v7nqp1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="k7885bg-u"/><path class="khk7plbbe"/><path class="g0v7nqp1u"/></g>`,
		"fallback": "streamline-plump:polaroid",
	});
}

export default Component;
