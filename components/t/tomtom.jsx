import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0fkcuiex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0fkcuiex"/>`,
		"fallback": "thesvg-color:tomtom",
	});
}

export default Component;
