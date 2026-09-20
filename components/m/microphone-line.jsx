import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu9ptml_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu9ptml_j"/>`,
		"fallback": "mingcute:microphone-line",
	});
}

export default Component;
