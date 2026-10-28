import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecxwjhb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecxwjhb2x"/>`,
		"fallback": "andrsrxn:text-no-wrap",
	});
}

export default Component;
