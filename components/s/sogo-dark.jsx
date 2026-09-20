import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3fh5btw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3fh5btw"/>`,
		"fallback": "selfhst:sogo-dark",
	});
}

export default Component;
