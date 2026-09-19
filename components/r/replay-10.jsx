import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9i1nc98d.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9i1nc98d"/>`,
		"fallback": "zmdi:replay-10",
	});
}

export default Component;
