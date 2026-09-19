import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avlitbbot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avlitbbot"/>`,
		"fallback": "game-icons:water-gun",
	});
}

export default Component;
