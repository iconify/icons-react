import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf11m8dlt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf11m8dlt"/>`,
		"fallback": "cryptocurrency:srn",
	});
}

export default Component;
