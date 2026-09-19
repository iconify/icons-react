import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk9y8_tpe.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk9y8_tpe"/>`,
		"fallback": "fa6-solid:lines-leaning",
	});
}

export default Component;
