import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3w9xceup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3w9xceup"/>`,
		"fallback": "pixel:sia",
	});
}

export default Component;
