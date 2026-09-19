import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7xhgpk0t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7xhgpk0t"/>`,
		"fallback": "fa7-solid:square-parking",
	});
}

export default Component;
