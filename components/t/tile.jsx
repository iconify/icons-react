import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvq6pj-fv.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvq6pj-fv"/>`,
		"fallback": "ls:tile",
	});
}

export default Component;
