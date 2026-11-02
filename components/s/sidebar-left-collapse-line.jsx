import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/norv53b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="norv53b6f"/>`,
		"fallback": "mingcute:sidebar-left-collapse-line",
	});
}

export default Component;
