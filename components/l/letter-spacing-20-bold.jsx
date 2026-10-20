import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdbuaia-f.css';
import '../../css/h/hl_idtb9j.css';
import '../../css/l/l2_7mneno.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdbuaia-f"/><path class="hl_idtb9j"/><path class="l2_7mneno"/>`,
		"fallback": "energy-icons:letter-spacing-20-bold",
	});
}

export default Component;
