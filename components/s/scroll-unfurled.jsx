import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts_8b5bly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts_8b5bly"/>`,
		"fallback": "game-icons:scroll-unfurled",
	});
}

export default Component;
