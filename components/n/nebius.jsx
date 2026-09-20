import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgy_1447z.css';
import '../../css/i/i3ixtobot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kgy_1447z"/><path class="i3ixtobot"/></g>`,
		"fallback": "thesvg:nebius",
	});
}

export default Component;
