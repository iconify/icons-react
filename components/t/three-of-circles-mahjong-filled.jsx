import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiip_5bma.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiip_5bma"/>`,
		"fallback": "dinkie-icons:three-of-circles-mahjong-filled",
	});
}

export default Component;
