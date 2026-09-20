import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpowmn5rd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpowmn5rd"/>`,
		"fallback": "roentgen:table-and-two-chairs-awning",
	});
}

export default Component;
