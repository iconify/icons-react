import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3mio-b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3mio-b8n"/>`,
		"fallback": "cbi:vrt-logo",
	});
}

export default Component;
