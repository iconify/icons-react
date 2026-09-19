import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_9jp5bhq.css';
import '../../css/y/yszbrkbna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_9jp5bhq"/><path class="yszbrkbna"/>`,
		"fallback": "ion:ios-unlocked",
	});
}

export default Component;
