import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3zu0wnkj.css';

const viewBox = {"width":1103,"height":386};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3zu0wnkj"/>`,
		"fallback": "thesvg-color:motion-light",
	});
}

export default Component;
