import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5g7e_k4u.css';
import '../../css/m/mob_cyb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5g7e_k4u"/><path clip-rule="evenodd" class="mob_cyb-s"/>`,
		"fallback": "si:monitor-stop-fill",
	});
}

export default Component;
