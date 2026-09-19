import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9xj66b-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9xj66b-b"/>`,
		"fallback": "garden:phone-stroke-16",
	});
}

export default Component;
