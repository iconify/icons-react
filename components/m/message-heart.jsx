import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p56h_bbeb.css';
import '../../css/d/dmnmaobmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p56h_bbeb"/><path class="dmnmaobmd"/>`,
		"fallback": "boxicons:message-heart",
	});
}

export default Component;
