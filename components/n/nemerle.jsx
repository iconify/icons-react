import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6i-kbbco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6i-kbbco"/>`,
		"fallback": "file-icons:nemerle",
	});
}

export default Component;
