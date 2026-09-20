import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epw0eyb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epw0eyb6s"/>`,
		"fallback": "thesvg-color:terser",
	});
}

export default Component;
