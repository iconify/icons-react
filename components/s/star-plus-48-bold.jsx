import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9furfe2z.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/u/u4_rd0b0p.css';
import '../../css/t/tlvvk8-lt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9furfe2z"/><path class="hwjgqrbah"/><path class="u4_rd0b0p"/><path class="tlvvk8-lt"/>`,
		"fallback": "energy-icons:star-plus-48-bold",
	});
}

export default Component;
