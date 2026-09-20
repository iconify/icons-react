import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpg9xubhg.css';
import '../../css/y/y4dz8u3sm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpg9xubhg"/><path class="y4dz8u3sm"/>`,
		"fallback": "qlementine-icons:quality-1-16",
	});
}

export default Component;
