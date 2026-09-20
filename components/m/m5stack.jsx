import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj96m5m8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj96m5m8l"/>`,
		"fallback": "thesvg-color:m5stack",
	});
}

export default Component;
