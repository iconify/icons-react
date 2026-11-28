import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqrll5btq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqrll5btq"/>`,
		"fallback": "selfhst:releasewatcher-light",
	});
}

export default Component;
