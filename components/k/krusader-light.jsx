import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxudpdy1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxudpdy1o"/>`,
		"fallback": "selfhst:krusader-light",
	});
}

export default Component;
