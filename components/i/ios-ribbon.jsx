import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-s_g5rvf.css';
import '../../css/s/sfb9xk9fs.css';
import '../../css/o/ob232qb0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-s_g5rvf"/><path class="sfb9xk9fs"/><path class="ob232qb0n"/>`,
		"fallback": "ion:ios-ribbon",
	});
}

export default Component;
