import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd8ircw_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd8ircw_v"/>`,
		"fallback": "game-icons:keyring",
	});
}

export default Component;
