import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ame3nhgih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ame3nhgih"/>`,
		"fallback": "game-icons:rifle",
	});
}

export default Component;
