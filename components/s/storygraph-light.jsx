import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi470-s6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi470-s6f"/>`,
		"fallback": "selfhst:storygraph-light",
	});
}

export default Component;
