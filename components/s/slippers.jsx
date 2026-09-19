import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsmq2s_xp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsmq2s_xp"/>`,
		"fallback": "game-icons:slippers",
	});
}

export default Component;
