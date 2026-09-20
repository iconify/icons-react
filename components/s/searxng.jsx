import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1bv8qxrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1bv8qxrg"/>`,
		"fallback": "thesvg-color:searxng",
	});
}

export default Component;
