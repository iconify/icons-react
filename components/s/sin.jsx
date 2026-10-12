import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pba35zbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pba35zbof"/>`,
		"fallback": "andrsrxn:sin",
	});
}

export default Component;
