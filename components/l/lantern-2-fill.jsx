import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crjj_4lqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crjj_4lqa"/>`,
		"fallback": "mingcute:lantern-2-fill",
	});
}

export default Component;
