import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfqcu0bne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfqcu0bne"/>`,
		"fallback": "game-icons:ragged-wound",
	});
}

export default Component;
