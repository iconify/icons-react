import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tty_kn-fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tty_kn-fe"/>`,
		"fallback": "cbi:viaplay",
	});
}

export default Component;
