import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqzom5m_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqzom5m_d"/>`,
		"fallback": "tdesign:subtitle-filled",
	});
}

export default Component;
