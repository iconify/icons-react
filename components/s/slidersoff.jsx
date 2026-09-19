import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv9d3zbfn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv9d3zbfn"/>`,
		"fallback": "whh:slidersoff",
	});
}

export default Component;
