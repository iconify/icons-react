import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvfoi7ylk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvfoi7ylk"/>`,
		"fallback": "reicon:msg-smile-filled",
	});
}

export default Component;
