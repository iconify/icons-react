import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyfikeb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyfikeb4k"/>`,
		"fallback": "game-icons:wave-surfer",
	});
}

export default Component;
