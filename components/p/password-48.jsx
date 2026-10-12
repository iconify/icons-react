import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0tjbtb1u.css';
import '../../css/k/k3m_0ge5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0tjbtb1u"/><path class="k3m_0ge5m"/>`,
		"fallback": "energy-icons:password-48",
	});
}

export default Component;
