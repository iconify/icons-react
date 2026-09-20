import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lydunhi0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lydunhi0g"/>`,
		"fallback": "qlementine-icons:repeat-16",
	});
}

export default Component;
