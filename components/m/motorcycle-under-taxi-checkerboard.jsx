import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7g600yaa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7g600yaa"/>`,
		"fallback": "pinhead:motorcycle-under-taxi-checkerboard",
	});
}

export default Component;
