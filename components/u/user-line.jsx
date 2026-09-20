import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9nmjxl7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9nmjxl7y"/>`,
		"fallback": "si:user-line",
	});
}

export default Component;
