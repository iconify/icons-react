import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebj33kbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebj33kbox"/>`,
		"fallback": "iconaut:store-solid",
	});
}

export default Component;
