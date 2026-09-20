import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-9kp1b3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-9kp1b3q"/>`,
		"fallback": "streamline-plump-color:toilet-women-flat",
	});
}

export default Component;
