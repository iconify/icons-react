import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_m_3btn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce_m_3btn"/>`,
		"fallback": "raphael:paper",
	});
}

export default Component;
