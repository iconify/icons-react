import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br6g_vlcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br6g_vlcu"/>`,
		"fallback": "ri:water-percent-line",
	});
}

export default Component;
