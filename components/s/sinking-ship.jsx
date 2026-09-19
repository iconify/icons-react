import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otbpwjbqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otbpwjbqi"/>`,
		"fallback": "game-icons:sinking-ship",
	});
}

export default Component;
