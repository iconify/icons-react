import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryn3yb3mw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryn3yb3mw"/>`,
		"fallback": "subway:sound-2",
	});
}

export default Component;
