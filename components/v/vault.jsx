import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24_4tbho.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24_4tbho"/>`,
		"fallback": "fa6-solid:vault",
	});
}

export default Component;
