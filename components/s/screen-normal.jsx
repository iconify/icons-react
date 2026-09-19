import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grv7j-bde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grv7j-bde"/>`,
		"fallback": "codicon:screen-normal",
	});
}

export default Component;
