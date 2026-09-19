import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adhe8v3hy.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adhe8v3hy"/>`,
		"fallback": "fa-solid:prescription-bottle-alt",
	});
}

export default Component;
