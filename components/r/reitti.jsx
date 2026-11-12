import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkqjrcc6k.css';
import '../../css/u/uy6molruc.css';
import '../../css/f/f29jxtg9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkqjrcc6k"/><path class="uy6molruc"/><path class="f29jxtg9l"/>`,
		"fallback": "selfhst:reitti",
	});
}

export default Component;
