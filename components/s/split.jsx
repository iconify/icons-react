import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfqt98b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfqt98b6c"/>`,
		"fallback": "andrsrxn:split",
	});
}

export default Component;
