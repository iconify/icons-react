import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itc5zdbai.css';
import '../../css/s/s7lyd-ozi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itc5zdbai"/><path class="s7lyd-ozi"/>`,
		"fallback": "ion:ios-clock-outline",
	});
}

export default Component;
