import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4j0rxb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4j0rxb5u"/>`,
		"fallback": "keyline-icons:panels-right-bottom-sharp",
	});
}

export default Component;
