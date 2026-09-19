import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdkq10bvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdkq10bvk"/>`,
		"fallback": "game-icons:stealth-bomber",
	});
}

export default Component;
