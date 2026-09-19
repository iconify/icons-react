import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-svj-bkf.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-svj-bkf"/>`,
		"fallback": "zmdi:movie",
	});
}

export default Component;
