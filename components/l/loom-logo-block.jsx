import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmvcj-yyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmvcj-yyo"/>`,
		"fallback": "streamline-logos:loom-logo-block",
	});
}

export default Component;
