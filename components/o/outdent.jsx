import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeb16tbab.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeb16tbab"/>`,
		"fallback": "fa-solid:outdent",
	});
}

export default Component;
