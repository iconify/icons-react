import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi0-grw5x.css';

const viewBox = {"width":460,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi0-grw5x"/>`,
		"fallback": "file-icons:openpolicyagent",
	});
}

export default Component;
