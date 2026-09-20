import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":231,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": ``,
		"fallback": "thesvg-color:oracle",
	});
}

export default Component;
