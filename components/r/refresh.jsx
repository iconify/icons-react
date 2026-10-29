import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc0i3r_es.css';
import '../../css/v/vd-a_tg_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc0i3r_es"/><path class="vd-a_tg_q"/>`,
		"fallback": "withicons-bauhaus:refresh",
	});
}

export default Component;
