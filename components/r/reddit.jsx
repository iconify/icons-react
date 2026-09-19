import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czvai8b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czvai8b2k"/>`,
		"fallback": "ci:reddit",
	});
}

export default Component;
