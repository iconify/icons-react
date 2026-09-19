import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9yrrwb6c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9yrrwb6c"/>`,
		"fallback": "fa6-solid:republican",
	});
}

export default Component;
