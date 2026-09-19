import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsjob7bfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsjob7bfw"/>`,
		"fallback": "game-icons:round-struck",
	});
}

export default Component;
