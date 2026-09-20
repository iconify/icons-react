import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txzu4-dhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txzu4-dhd"/>`,
		"fallback": "ri:scan-fill",
	});
}

export default Component;
