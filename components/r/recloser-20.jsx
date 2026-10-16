import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvhip5cnc.css';
import '../../css/e/e604b0bcg.css';
import '../../css/v/v6urtjbrm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvhip5cnc"/><path class="e604b0bcg"/><path class="v6urtjbrm"/>`,
		"fallback": "energy-icons:recloser-20",
	});
}

export default Component;
