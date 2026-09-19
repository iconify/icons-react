import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe0m_79-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe0m_79-p"/>`,
		"fallback": "game-icons:missile-mech",
	});
}

export default Component;
