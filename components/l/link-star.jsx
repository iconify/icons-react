import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkt-o0bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkt-o0bjg"/>`,
		"fallback": "tabler:link-star",
	});
}

export default Component;
