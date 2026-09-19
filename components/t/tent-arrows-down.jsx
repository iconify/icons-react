import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd-201okx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd-201okx"/>`,
		"fallback": "fa7-solid:tent-arrows-down",
	});
}

export default Component;
