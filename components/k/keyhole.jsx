import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeuow5b-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeuow5b-q"/>`,
		"fallback": "at-icons:keyhole",
	});
}

export default Component;
