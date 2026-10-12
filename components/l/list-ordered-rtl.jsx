import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhp7abu6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhp7abu6w"/>`,
		"fallback": "andrsrxn:list-ordered-rtl",
	});
}

export default Component;
