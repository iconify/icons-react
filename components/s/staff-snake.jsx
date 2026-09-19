import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_ofxbc0f.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_ofxbc0f"/>`,
		"fallback": "fa6-solid:staff-snake",
	});
}

export default Component;
