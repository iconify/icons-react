import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibv6145te.css';
import '../../css/n/nkzww8rwm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibv6145te"/><path class="nkzww8rwm"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-open-for-business-button",
	});
}

export default Component;
