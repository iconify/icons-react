import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfc9oiu_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfc9oiu_l"/>`,
		"fallback": "andrsrxn:tornado",
	});
}

export default Component;
