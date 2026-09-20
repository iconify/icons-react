import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-p9n0bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-p9n0bkv"/>`,
		"fallback": "streamline-freehand:keyboard-command",
	});
}

export default Component;
