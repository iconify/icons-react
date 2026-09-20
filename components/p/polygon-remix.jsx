import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3eun504p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3eun504p"/>`,
		"fallback": "streamline:polygon-remix",
	});
}

export default Component;
