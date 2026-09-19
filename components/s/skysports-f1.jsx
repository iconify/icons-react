import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmsss6jrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmsss6jrd"/>`,
		"fallback": "cbi:skysports-f1",
	});
}

export default Component;
