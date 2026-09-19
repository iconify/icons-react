import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ebg4b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ebg4b3g"/>`,
		"fallback": "hugeicons:olympic-torch",
	});
}

export default Component;
