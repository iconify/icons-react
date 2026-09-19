import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oez7e4bng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oez7e4bng"/>`,
		"fallback": "dashicons:money-alt",
	});
}

export default Component;
