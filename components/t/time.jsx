import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h02-0zi4d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h02-0zi4d"/>`,
		"fallback": "uiw:time",
	});
}

export default Component;
