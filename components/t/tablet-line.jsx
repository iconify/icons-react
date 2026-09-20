import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps20ljceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps20ljceq"/>`,
		"fallback": "ri:tablet-line",
	});
}

export default Component;
