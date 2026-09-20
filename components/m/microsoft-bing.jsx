import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_re_zmcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_re_zmcp"/>`,
		"fallback": "thesvg-color:microsoft-bing",
	});
}

export default Component;
