import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lllp7cbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lllp7cbua"/>`,
		"fallback": "selfhst:voilib-light",
	});
}

export default Component;
