import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vobx_nbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vobx_nbbp"/>`,
		"fallback": "game-icons:space-suit",
	});
}

export default Component;
