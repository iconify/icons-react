import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_0yqb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_0yqb6m"/>`,
		"fallback": "andrsrxn:square-brackets-off",
	});
}

export default Component;
