import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iolxribnz.css';
import '../../css/u/uoa7tsb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="iolxribnz"/><path class="uoa7tsb1x"/></g>`,
		"fallback": "matita:message-circle",
	});
}

export default Component;
