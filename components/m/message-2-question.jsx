import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtgwkv1mf.css';
import '../../css/p/p8m96-3vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtgwkv1mf"/><path clip-rule="evenodd" class="p8m96-3vx"/>`,
		"fallback": "lineicons:message-2-question",
	});
}

export default Component;
