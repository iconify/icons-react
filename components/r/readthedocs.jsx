import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fssbm7fvd.css';

const viewBox = {"width":402,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fssbm7fvd"/>`,
		"fallback": "file-icons:readthedocs",
	});
}

export default Component;
