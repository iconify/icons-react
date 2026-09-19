import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7olm2c0k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7olm2c0k"/>`,
		"fallback": "fa6-solid:robot",
	});
}

export default Component;
