import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v37vo8b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v37vo8b1i"/>`,
		"fallback": "andrsrxn:uhd",
	});
}

export default Component;
