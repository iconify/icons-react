import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufj9n4bfr.css';
import '../../css/p/pv04-_f7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufj9n4bfr"/><path class="pv04-_f7u"/>`,
		"fallback": "pixel:twitch",
	});
}

export default Component;
