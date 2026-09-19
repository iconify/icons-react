import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-x9zbgi.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-x9zbgi"/>`,
		"fallback": "fa:medium",
	});
}

export default Component;
