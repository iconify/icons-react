import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwio0m8eo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwio0m8eo"/>`,
		"fallback": "cib:vimeo",
	});
}

export default Component;
