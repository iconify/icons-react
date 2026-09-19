import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ze8629c.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ze8629c"/>`,
		"fallback": "fa-solid:radiation",
	});
}

export default Component;
