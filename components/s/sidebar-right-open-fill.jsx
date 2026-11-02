import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scszbka3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scszbka3b"/>`,
		"fallback": "mingcute:sidebar-right-open-fill",
	});
}

export default Component;
