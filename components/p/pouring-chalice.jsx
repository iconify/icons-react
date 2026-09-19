import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usx2mjb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usx2mjb7m"/>`,
		"fallback": "game-icons:pouring-chalice",
	});
}

export default Component;
