import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn64xzbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn64xzbjn"/>`,
		"fallback": "cbi:trunkrs",
	});
}

export default Component;
