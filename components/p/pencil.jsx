import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-nse78zz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-nse78zz"/>`,
		"fallback": "el:pencil",
	});
}

export default Component;
