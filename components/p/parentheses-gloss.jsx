import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly5v89bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly5v89bze"/>`,
		"fallback": "withicons:parentheses-gloss",
	});
}

export default Component;
