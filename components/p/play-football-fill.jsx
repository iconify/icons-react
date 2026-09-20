import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvq5z1btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvq5z1btt"/>`,
		"fallback": "mingcute:play-football-fill",
	});
}

export default Component;
