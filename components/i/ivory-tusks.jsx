import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu9ipebir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu9ipebir"/>`,
		"fallback": "game-icons:ivory-tusks",
	});
}

export default Component;
