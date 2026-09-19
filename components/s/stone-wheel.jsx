import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnu1e1qxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnu1e1qxt"/>`,
		"fallback": "game-icons:stone-wheel",
	});
}

export default Component;
