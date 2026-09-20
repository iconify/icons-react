import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3z-_y6_y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3z-_y6_y"/>`,
		"fallback": "streamline:virtual-reality-solid",
	});
}

export default Component;
