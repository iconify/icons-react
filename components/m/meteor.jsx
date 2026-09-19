import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to19wsb8i.css';
import '../../css/v/vjo9wlbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to19wsb8i"/><path class="vjo9wlbzp"/>`,
		"fallback": "bx:meteor",
	});
}

export default Component;
