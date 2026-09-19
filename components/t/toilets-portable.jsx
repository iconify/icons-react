import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq95aj0gj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq95aj0gj"/>`,
		"fallback": "fa7-solid:toilets-portable",
	});
}

export default Component;
