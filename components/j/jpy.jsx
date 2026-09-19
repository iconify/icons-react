import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d_kn0np1m.css';
import '../../css/j/jew5n_nry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="d_kn0np1m"/><path class="jew5n_nry"/></g>`,
		"fallback": "cryptocurrency-color:jpy",
	});
}

export default Component;
