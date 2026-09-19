import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r832b7_oz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r832b7_oz"/>`,
		"fallback": "file-icons:qt",
	});
}

export default Component;
