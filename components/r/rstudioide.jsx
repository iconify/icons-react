import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn2h7mb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn2h7mb8p"/>`,
		"fallback": "simple-icons:rstudioide",
	});
}

export default Component;
