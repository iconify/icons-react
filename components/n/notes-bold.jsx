import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0lgf8m_j.css';
import '../../css/v/vdullb4tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0lgf8m_j"/><path clip-rule="evenodd" class="vdullb4tr"/>`,
		"fallback": "solar:notes-bold",
	});
}

export default Component;
