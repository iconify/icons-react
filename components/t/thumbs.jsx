import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev-b95nln.css';

const viewBox = {"width":720,"height":780};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev-b95nln"/>`,
		"fallback": "il:thumbs",
	});
}

export default Component;
