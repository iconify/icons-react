import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcfsm3qkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcfsm3qkt"/>`,
		"fallback": "mdi:pump-off",
	});
}

export default Component;
