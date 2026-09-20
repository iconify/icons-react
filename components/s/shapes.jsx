import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh4teh6rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh4teh6rm"/>`,
		"fallback": "streamline-ultimate:shapes",
	});
}

export default Component;
