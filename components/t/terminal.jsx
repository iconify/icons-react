import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65rc4bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65rc4bgo"/>`,
		"fallback": "feather:terminal",
	});
}

export default Component;
