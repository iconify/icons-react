import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5-mwfuyg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5-mwfuyg"/>`,
		"fallback": "fa-solid:money-bill-wave-alt",
	});
}

export default Component;
