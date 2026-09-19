import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc08kibud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc08kibud"/>`,
		"fallback": "ci:text-align-right",
	});
}

export default Component;
