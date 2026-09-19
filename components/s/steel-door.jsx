import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qivvp_99j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qivvp_99j"/>`,
		"fallback": "game-icons:steel-door",
	});
}

export default Component;
