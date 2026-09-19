import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqmy37bsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqmy37bsl"/>`,
		"fallback": "game-icons:rialto-bridge",
	});
}

export default Component;
