import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fscw49xbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fscw49xbe"/>`,
		"fallback": "game-icons:nest-birds",
	});
}

export default Component;
