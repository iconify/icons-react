import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmbygwb-v.css';

const viewBox = {"width":1045.7,"height":85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmbygwb-v"/>`,
		"fallback": "thesvg-color:jaguar-legacy-dark",
	});
}

export default Component;
