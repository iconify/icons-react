import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b98gg_91s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b98gg_91s"/>`,
		"fallback": "selfhst:peertube-dark",
	});
}

export default Component;
