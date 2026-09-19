import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhgy8ebgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhgy8ebgx"/>`,
		"fallback": "game-icons:standing-potion",
	});
}

export default Component;
