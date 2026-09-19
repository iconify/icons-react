import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd3383bmk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd3383bmk"/>`,
		"fallback": "fa7-regular:money-bill-alt",
	});
}

export default Component;
