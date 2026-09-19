import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebj6rvb1q.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebj6rvb1q"/>`,
		"fallback": "fontisto:linux",
	});
}

export default Component;
