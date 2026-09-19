import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-3oclb1y.css';

const viewBox = {"width":502,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-3oclb1y"/>`,
		"fallback": "file-icons:totvs",
	});
}

export default Component;
