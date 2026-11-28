import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chnjt5ufs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chnjt5ufs"/>`,
		"fallback": "noviair-light:lock-check",
	});
}

export default Component;
