import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax1jtlbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax1jtlbgr"/>`,
		"fallback": "mdi-light:table",
	});
}

export default Component;
