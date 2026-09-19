import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8_u7rkpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8_u7rkpb"/>`,
		"fallback": "fa6-solid:mars-and-venus",
	});
}

export default Component;
