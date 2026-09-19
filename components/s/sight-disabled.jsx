import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wukac1wrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wukac1wrl"/>`,
		"fallback": "game-icons:sight-disabled",
	});
}

export default Component;
