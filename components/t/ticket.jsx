import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tth_cmy-p.css';
import '../../css/a/agi54rj7k.css';
import '../../css/j/jsp36ebok.css';
import '../../css/d/d94gehbjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tth_cmy-p"/><path class="agi54rj7k"/><path class="jsp36ebok"/><path class="d94gehbjp"/>`,
		"fallback": "fxemoji:ticket",
	});
}

export default Component;
