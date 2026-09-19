import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0yugsbdx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0yugsbdx"/>`,
		"fallback": "fa6-regular:square",
	});
}

export default Component;
