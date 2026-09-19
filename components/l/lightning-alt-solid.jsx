import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt2dw8m3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt2dw8m3f"/>`,
		"fallback": "basil:lightning-alt-solid",
	});
}

export default Component;
