import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcx4orqhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcx4orqhr"/>`,
		"fallback": "game-icons:tribal-mask",
	});
}

export default Component;
