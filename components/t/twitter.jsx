import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcko2m5wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcko2m5wu"/>`,
		"fallback": "feather:twitter",
	});
}

export default Component;
