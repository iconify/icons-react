import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf3ugybwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf3ugybwq"/>`,
		"fallback": "mdi:till",
	});
}

export default Component;
