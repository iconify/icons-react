import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ub43w-o.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ub43w-o"/>`,
		"fallback": "system-uicons:pill",
	});
}

export default Component;
