import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_c9k0a4f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_c9k0a4f"/>`,
		"fallback": "ooui:view-details-ltr",
	});
}

export default Component;
