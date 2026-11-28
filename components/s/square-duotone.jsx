import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5srw14gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q5srw14gw"/>`,
		"fallback": "iconaut:square-duotone",
	});
}

export default Component;
