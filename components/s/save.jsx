import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc8wj-c_r.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc8wj-c_r"/>`,
		"fallback": "fa:save",
	});
}

export default Component;
