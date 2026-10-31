import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9im-ib6f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9im-ib6f"/>`,
		"fallback": "pinhead:thatched-building-with-window",
	});
}

export default Component;
