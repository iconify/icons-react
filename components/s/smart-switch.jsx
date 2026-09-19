import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxni506zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxni506zc"/>`,
		"fallback": "cbi:smart-switch",
	});
}

export default Component;
