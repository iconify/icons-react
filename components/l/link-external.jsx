import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obw0lbcts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obw0lbcts"/>`,
		"fallback": "codicon:link-external",
	});
}

export default Component;
