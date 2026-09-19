import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afh5eih4e.css';

const viewBox = {"width":387,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afh5eih4e"/>`,
		"fallback": "file-icons:ooc",
	});
}

export default Component;
