import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwm54coxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwm54coxy"/>`,
		"fallback": "game-icons:wax-seal",
	});
}

export default Component;
