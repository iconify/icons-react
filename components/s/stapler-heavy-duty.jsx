import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foqeq6boe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foqeq6boe"/>`,
		"fallback": "game-icons:stapler-heavy-duty",
	});
}

export default Component;
