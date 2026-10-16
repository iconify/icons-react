import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnnymsbii.css';
import '../../css/l/lai5ftb8v.css';
import '../../css/d/d_2bnvy8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnnymsbii"/><path class="lai5ftb8v"/><path class="d_2bnvy8d"/>`,
		"fallback": "energy-icons:tow-truck-48",
	});
}

export default Component;
