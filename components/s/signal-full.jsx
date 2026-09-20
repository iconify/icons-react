import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hbxdkvb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hbxdkvb"/>`,
		"fallback": "system-uicons:signal-full",
	});
}

export default Component;
