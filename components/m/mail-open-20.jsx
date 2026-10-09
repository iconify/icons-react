import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo0s-wbvc.css';
import '../../css/t/t0ztzgb1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo0s-wbvc"/><path class="t0ztzgb1l"/>`,
		"fallback": "energy-icons:mail-open-20",
	});
}

export default Component;
