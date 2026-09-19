import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekwir30sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekwir30sd"/>`,
		"fallback": "ci:move-horizontal",
	});
}

export default Component;
