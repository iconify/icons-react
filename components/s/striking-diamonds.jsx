import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzjtm5bom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzjtm5bom"/>`,
		"fallback": "game-icons:striking-diamonds",
	});
}

export default Component;
