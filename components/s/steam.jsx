import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqawv-mid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqawv-mid"/>`,
		"fallback": "mdi:steam",
	});
}

export default Component;
