import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtjq6nrol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtjq6nrol"/>`,
		"fallback": "at-icons:telescope",
	});
}

export default Component;
