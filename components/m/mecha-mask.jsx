import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhaol57jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhaol57jf"/>`,
		"fallback": "game-icons:mecha-mask",
	});
}

export default Component;
