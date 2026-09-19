import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opip_vb6e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opip_vb6e"/>`,
		"fallback": "fa-solid:parking",
	});
}

export default Component;
