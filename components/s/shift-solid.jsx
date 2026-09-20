import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hcr812e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hcr812e"/>`,
		"fallback": "streamline:shift-solid",
	});
}

export default Component;
