import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ght7cujyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ght7cujyx"/>`,
		"fallback": "cbi:panel-glass-door2-close",
	});
}

export default Component;
