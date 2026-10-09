import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wan7vd7uu.css';
import '../../css/m/m_3bu7b7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wan7vd7uu"/><path class="m_3bu7b7s"/>`,
		"fallback": "energy-icons:messages-48-bold",
	});
}

export default Component;
