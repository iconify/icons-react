import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z96m-mn-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z96m-mn-u"/>`,
		"fallback": "mingcute:skip-previous-fill",
	});
}

export default Component;
