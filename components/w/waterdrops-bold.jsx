import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq3ocyl1l.css';
import '../../css/m/m_u_5ybba.css';
import '../../css/s/s-vk0qbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq3ocyl1l"/><path class="m_u_5ybba"/><path class="s-vk0qbpw"/>`,
		"fallback": "solar:waterdrops-bold",
	});
}

export default Component;
