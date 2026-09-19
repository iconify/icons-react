import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcnu4fbiw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcnu4fbiw"/>`,
		"fallback": "fa7-solid:star-of-david",
	});
}

export default Component;
