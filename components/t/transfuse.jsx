import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ear3k3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ear3k3m"/>`,
		"fallback": "game-icons:transfuse",
	});
}

export default Component;
