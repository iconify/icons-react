import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xswv0rbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xswv0rbkp"/>`,
		"fallback": "mdi:trash-circle",
	});
}

export default Component;
