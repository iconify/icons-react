import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eljshwb7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eljshwb7j"/>`,
		"fallback": "game-icons:millenium-key",
	});
}

export default Component;
