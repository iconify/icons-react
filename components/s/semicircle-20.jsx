import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_si_y0xp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_si_y0xp"/>`,
		"fallback": "energy-icons:semicircle-20",
	});
}

export default Component;
