import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_clobc_b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_clobc_b"/>`,
		"fallback": "fa6-solid:people-group",
	});
}

export default Component;
