import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzy3_p34v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzy3_p34v"/>`,
		"fallback": "andrsrxn:text-two-columns",
	});
}

export default Component;
