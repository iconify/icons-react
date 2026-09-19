import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de6943wru.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de6943wru"/>`,
		"fallback": "foundation:record",
	});
}

export default Component;
