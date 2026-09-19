import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua9lbocea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua9lbocea"/>`,
		"fallback": "at-icons:sponge",
	});
}

export default Component;
