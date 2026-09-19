import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-8k04oul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-8k04oul"/>`,
		"fallback": "guidance:port",
	});
}

export default Component;
