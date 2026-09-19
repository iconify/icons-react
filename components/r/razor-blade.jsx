import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8irw7wpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8irw7wpl"/>`,
		"fallback": "game-icons:razor-blade",
	});
}

export default Component;
