import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7-al5b6a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7-al5b6a"/>`,
		"fallback": "fa-solid:memory",
	});
}

export default Component;
