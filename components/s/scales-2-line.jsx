import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecy_txqvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecy_txqvx"/>`,
		"fallback": "ri:scales-2-line",
	});
}

export default Component;
