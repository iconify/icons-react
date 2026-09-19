import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfaa8oorn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfaa8oorn"/>`,
		"fallback": "fa6-solid:truck-field",
	});
}

export default Component;
