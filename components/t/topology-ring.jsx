import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huqn5m_ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huqn5m_ey"/>`,
		"fallback": "tabler:topology-ring",
	});
}

export default Component;
