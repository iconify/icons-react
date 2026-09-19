import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm4tdhhde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm4tdhhde"/>`,
		"fallback": "eva:person-done-outline",
	});
}

export default Component;
