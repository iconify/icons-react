import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x16rdgb4k.css';
import '../../css/s/s_9jp5bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x16rdgb4k"/><path class="s_9jp5bhq"/>`,
		"fallback": "ion:ios-locked",
	});
}

export default Component;
