import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfw8p-b_i.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfw8p-b_i"/>`,
		"fallback": "el:text-width",
	});
}

export default Component;
