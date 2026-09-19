import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qli42hr8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qli42hr8t"/>`,
		"fallback": "cbi:next-hub-max",
	});
}

export default Component;
