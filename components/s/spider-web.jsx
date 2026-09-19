import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jveo_3b9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jveo_3b9j"/>`,
		"fallback": "game-icons:spider-web",
	});
}

export default Component;
