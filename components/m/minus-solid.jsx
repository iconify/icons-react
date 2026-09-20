import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aao71moyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aao71moyn"/>`,
		"fallback": "stash:minus-solid",
	});
}

export default Component;
