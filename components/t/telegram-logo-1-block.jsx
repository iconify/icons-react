import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpmn_2k3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gpmn_2k3v"/>`,
		"fallback": "streamline-logos:telegram-logo-1-block",
	});
}

export default Component;
