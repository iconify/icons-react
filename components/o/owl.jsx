import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r61xc-b7q.css';

const viewBox = {"width":318,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r61xc-b7q"/>`,
		"fallback": "file-icons:owl",
	});
}

export default Component;
