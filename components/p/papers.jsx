import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx2qpccww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx2qpccww"/>`,
		"fallback": "game-icons:papers",
	});
}

export default Component;
