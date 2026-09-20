import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_0nci75d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_0nci75d"/>`,
		"fallback": "qlementine-icons:markup-16",
	});
}

export default Component;
