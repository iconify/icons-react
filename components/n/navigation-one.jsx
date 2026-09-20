import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm1ax3iyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm1ax3iyn"/>`,
		"fallback": "mynaui:navigation-one",
	});
}

export default Component;
