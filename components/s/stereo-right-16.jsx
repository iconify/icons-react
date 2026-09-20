import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r97kr0boe.css';
import '../../css/w/wzy28rbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r97kr0boe"/><path clip-rule="evenodd" class="wzy28rbvo"/>`,
		"fallback": "qlementine-icons:stereo-right-16",
	});
}

export default Component;
