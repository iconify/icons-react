import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp06jhbdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp06jhbdx"/>`,
		"fallback": "ion:logo-skype",
	});
}

export default Component;
