import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj-lzbb4z.css';
import '../../css/s/symaru7nm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj-lzbb4z"/><path class="symaru7nm"/>`,
		"fallback": "energy-icons:state-of-charge-48-bold",
	});
}

export default Component;
