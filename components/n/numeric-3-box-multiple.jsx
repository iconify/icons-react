import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo5jj9iek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo5jj9iek"/>`,
		"fallback": "mdi:numeric-3-box-multiple",
	});
}

export default Component;
