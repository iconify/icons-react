import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nemn_ba6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nemn_ba6n"/>`,
		"fallback": "game-icons:pin",
	});
}

export default Component;
