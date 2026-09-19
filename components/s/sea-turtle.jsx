import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_fz9xb-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_fz9xb-b"/>`,
		"fallback": "game-icons:sea-turtle",
	});
}

export default Component;
