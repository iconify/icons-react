import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-b1pbxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh-b1pbxj"/>`,
		"fallback": "game-icons:star-key",
	});
}

export default Component;
