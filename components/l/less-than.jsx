import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppom3knrm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppom3knrm"/>`,
		"fallback": "fa-solid:less-than",
	});
}

export default Component;
