import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb023bcmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb023bcmd"/>`,
		"fallback": "ri:sidebar-fold-line",
	});
}

export default Component;
