import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_m_tibrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_m_tibrn"/>`,
		"fallback": "si:projects-alt-fill",
	});
}

export default Component;
