import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhqf8nbii.css';

const viewBox = {"width":472,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhqf8nbii"/>`,
		"fallback": "file-icons:junos",
	});
}

export default Component;
