import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epd-0w0kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epd-0w0kv"/>`,
		"fallback": "cbi:top-radio",
	});
}

export default Component;
