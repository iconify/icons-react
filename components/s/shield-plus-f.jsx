import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3r3ebcls.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3r3ebcls"/>`,
		"fallback": "jam:shield-plus-f",
	});
}

export default Component;
