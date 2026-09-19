import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czpji66pf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czpji66pf"/>`,
		"fallback": "dinkie-icons:video-game-filled",
	});
}

export default Component;
