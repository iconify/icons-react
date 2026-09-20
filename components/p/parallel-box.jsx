import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp2qudbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp2qudbik"/>`,
		"fallback": "mdi:parallel-box",
	});
}

export default Component;
