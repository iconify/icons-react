import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttbe-fbsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttbe-fbsc"/>`,
		"fallback": "game-icons:power-button",
	});
}

export default Component;
