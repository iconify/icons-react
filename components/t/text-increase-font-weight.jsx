import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ae7obfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8ae7obfe"/>`,
		"fallback": "andrsrxn:text-increase-font-weight",
	});
}

export default Component;
