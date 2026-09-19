import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odo1irb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odo1irb1f"/>`,
		"fallback": "game-icons:ping-pong-bat",
	});
}

export default Component;
