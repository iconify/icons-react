import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqscxe98f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqscxe98f"/>`,
		"fallback": "cib:vsco",
	});
}

export default Component;
