import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfsfruvhw.css';
import '../../css/e/e9tnf2s0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfsfruvhw"/><path class="e9tnf2s0u"/>`,
		"fallback": "energy-icons:thumbs-down-20-bold",
	});
}

export default Component;
