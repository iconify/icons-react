import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogqt8xqdr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogqt8xqdr"/>`,
		"fallback": "fa6-solid:tents",
	});
}

export default Component;
