import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2-_ejm0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2-_ejm0l"/>`,
		"fallback": "iconoir:phone-remove",
	});
}

export default Component;
