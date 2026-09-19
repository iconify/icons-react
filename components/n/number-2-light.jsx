import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-um4sufk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-um4sufk"/>`,
		"fallback": "iconamoon:number-2-light",
	});
}

export default Component;
