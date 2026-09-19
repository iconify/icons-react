import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av5c-t6zb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av5c-t6zb"/>`,
		"fallback": "fa6-solid:person-dress-burst",
	});
}

export default Component;
