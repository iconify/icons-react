import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc-a7d1cl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc-a7d1cl"/>`,
		"fallback": "streamline:milkshake-remix",
	});
}

export default Component;
