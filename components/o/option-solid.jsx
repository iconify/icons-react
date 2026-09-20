import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ery9h55ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ery9h55ao"/>`,
		"fallback": "mynaui:option-solid",
	});
}

export default Component;
