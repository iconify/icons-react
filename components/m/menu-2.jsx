import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz2_1m_at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz2_1m_at"/>`,
		"fallback": "reicon:menu-2",
	});
}

export default Component;
