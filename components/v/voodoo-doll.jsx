import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i336q6bsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i336q6bsl"/>`,
		"fallback": "game-icons:voodoo-doll",
	});
}

export default Component;
