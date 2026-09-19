import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcmzzw6so.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcmzzw6so"/>`,
		"fallback": "game-icons:snout",
	});
}

export default Component;
