import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai2ywhbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai2ywhbdh"/>`,
		"fallback": "cbi:spotbear-cube",
	});
}

export default Component;
