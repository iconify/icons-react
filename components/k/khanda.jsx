import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwks0ac9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwks0ac9f"/>`,
		"fallback": "fa6-solid:khanda",
	});
}

export default Component;
