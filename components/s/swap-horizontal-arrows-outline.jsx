import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_cx-qbkx.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_cx-qbkx"/>`,
		"fallback": "cuida:swap-horizontal-arrows-outline",
	});
}

export default Component;
