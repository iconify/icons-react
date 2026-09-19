import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lftjc7k9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lftjc7k9d"/>`,
		"fallback": "game-icons:sticking-plaster",
	});
}

export default Component;
