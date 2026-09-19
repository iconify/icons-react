import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg81je4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jg81je4wm"/>`,
		"fallback": "gg:options",
	});
}

export default Component;
