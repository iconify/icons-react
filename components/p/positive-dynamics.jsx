import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_mdpg6ct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_mdpg6ct"/>`,
		"fallback": "icon-park-outline:positive-dynamics",
	});
}

export default Component;
