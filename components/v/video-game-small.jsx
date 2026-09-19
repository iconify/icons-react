import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to43pubzo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to43pubzo"/>`,
		"fallback": "dinkie-icons:video-game-small",
	});
}

export default Component;
