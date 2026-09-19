import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv6d38b8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv6d38b8g"/>`,
		"fallback": "game-icons:microscope",
	});
}

export default Component;
