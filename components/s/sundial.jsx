import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofvr41bei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofvr41bei"/>`,
		"fallback": "game-icons:sundial",
	});
}

export default Component;
