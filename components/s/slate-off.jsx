import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fen90195f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fen90195f"/>`,
		"fallback": "mdi:slate-off",
	});
}

export default Component;
