import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwymv390r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwymv390r"/>`,
		"fallback": "uis:list-ui-alt",
	});
}

export default Component;
