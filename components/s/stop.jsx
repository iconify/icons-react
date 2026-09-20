import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t90x8mbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t90x8mbfn"/>`,
		"fallback": "mi:stop",
	});
}

export default Component;
