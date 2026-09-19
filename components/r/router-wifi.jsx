import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2qg-ubuc.css';
import '../../css/u/u5et5qd9b.css';
import '../../css/m/mab01i4rq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l2qg-ubuc"/><path class="u5et5qd9b"/><path class="mab01i4rq"/>`,
		"fallback": "carbon:router-wifi",
	});
}

export default Component;
