import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e508-4bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e508-4bfn"/>`,
		"fallback": "withicons:palette-solid",
	});
}

export default Component;
