import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldu42lbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldu42lbpt"/>`,
		"fallback": "withicons:plane-solid",
	});
}

export default Component;
