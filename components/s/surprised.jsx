import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz8waubmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz8waubmz"/>`,
		"fallback": "game-icons:surprised",
	});
}

export default Component;
