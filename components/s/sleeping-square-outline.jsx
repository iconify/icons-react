import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prq9nybvi.css';
import '../../css/q/qmmwrfbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prq9nybvi"/><path clip-rule="evenodd" class="qmmwrfbyk"/>`,
		"fallback": "solar:sleeping-square-outline",
	});
}

export default Component;
