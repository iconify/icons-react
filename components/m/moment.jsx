import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha1ke4byu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha1ke4byu"/>`,
		"fallback": "file-icons:moment",
	});
}

export default Component;
