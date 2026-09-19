import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-rfoac0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-rfoac0f"/>`,
		"fallback": "file-icons:nickle",
	});
}

export default Component;
