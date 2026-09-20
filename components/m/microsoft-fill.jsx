import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clyg4co3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clyg4co3c"/>`,
		"fallback": "ri:microsoft-fill",
	});
}

export default Component;
