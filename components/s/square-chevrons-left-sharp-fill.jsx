import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf1crc8bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf1crc8bd"/>`,
		"fallback": "keyline-icons:square-chevrons-left-sharp-fill",
	});
}

export default Component;
