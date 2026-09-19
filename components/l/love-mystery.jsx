import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzlqmi-kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzlqmi-kj"/>`,
		"fallback": "game-icons:love-mystery",
	});
}

export default Component;
