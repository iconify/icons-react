import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imwgxlb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imwgxlb4j"/>`,
		"fallback": "andrsrxn:text-heading-six",
	});
}

export default Component;
