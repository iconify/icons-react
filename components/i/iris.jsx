import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya01r5b4e.css';
import '../../css/t/t_5-mteix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya01r5b4e"/><path clip-rule="evenodd" class="t_5-mteix"/>`,
		"fallback": "token:iris",
	});
}

export default Component;
