import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcosmutfq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcosmutfq"/>`,
		"fallback": "pinhead:water-standpipe-with-handle-and-drinking-glass",
	});
}

export default Component;
