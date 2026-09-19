import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wry-w1bxn.css';
import '../../css/n/nyurgsbqe.css';
import '../../css/d/djgk4x_3w.css';
import '../../css/z/z16su76ar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wry-w1bxn"/><rect class="nyurgsbqe"/><rect class="djgk4x_3w"/><rect class="z16su76ar"/>`,
		"fallback": "famicons:stats-chart-outline",
	});
}

export default Component;
