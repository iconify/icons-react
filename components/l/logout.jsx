import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3h-92bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3h-92bcm"/>`,
		"fallback": "tdesign:logout",
	});
}

export default Component;
