import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysaxjs38j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ysaxjs38j"/>`,
		"fallback": "streamline-plump:no-touch-sign-remix",
	});
}

export default Component;
