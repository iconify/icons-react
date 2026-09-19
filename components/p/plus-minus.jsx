import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyei0ydwv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyei0ydwv"/>`,
		"fallback": "fa6-solid:plus-minus",
	});
}

export default Component;
