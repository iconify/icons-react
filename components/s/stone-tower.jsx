import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrs66hyvw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrs66hyvw"/>`,
		"fallback": "game-icons:stone-tower",
	});
}

export default Component;
