import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hww0nz56s.css';
import '../../css/g/gc4-anb8e.css';
import '../../css/j/j924fnbja.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hww0nz56s"/><path class="gc4-anb8e"/><path clip-rule="evenodd" class="j924fnbja"/>`,
		"fallback": "tabler-flags:turkic-states",
	});
}

export default Component;
