import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm_k1-b9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm_k1-b9f"/>`,
		"fallback": "game-icons:spiked-snail",
	});
}

export default Component;
