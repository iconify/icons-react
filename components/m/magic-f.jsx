import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaz8pwiff.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaz8pwiff"/>`,
		"fallback": "jam:magic-f",
	});
}

export default Component;
