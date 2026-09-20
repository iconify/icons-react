import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5o39boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn5o39boe"/>`,
		"fallback": "keyline-icons:panel-top-open-fill",
	});
}

export default Component;
