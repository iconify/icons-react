import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co2jqtext.css';
import '../../css/w/wndsmq8hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co2jqtext duoicon-secondary-layer"/><path class="duoicon-primary-layer wndsmq8hh"/>`,
		"fallback": "duo-icons:settings",
	});
}

export default Component;
