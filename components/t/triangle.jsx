import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8u8d-z0k.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8u8d-z0k"/>`,
		"fallback": "jam:triangle",
	});
}

export default Component;
