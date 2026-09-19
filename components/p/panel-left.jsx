import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af7om7bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af7om7bwm"/>`,
		"fallback": "hugeicons:panel-left",
	});
}

export default Component;
