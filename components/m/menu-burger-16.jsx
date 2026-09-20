import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm2dx0b1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm2dx0b1f"/>`,
		"fallback": "qlementine-icons:menu-burger-16",
	});
}

export default Component;
