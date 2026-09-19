import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwy7sxrzt.css';

const viewBox = {"width":1792,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwy7sxrzt"/>`,
		"fallback": "fa:video-camera",
	});
}

export default Component;
