import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxjbrub3m.css';
import '../../css/b/bcedl12ma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxjbrub3m"/><circle class="bcedl12ma"/>`,
		"fallback": "ooui:user-chat-rtl",
	});
}

export default Component;
