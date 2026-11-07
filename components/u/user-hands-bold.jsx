import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozaoy9b0z.css';
import '../../css/o/oazgwdbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozaoy9b0z"/><path class="oazgwdbak"/>`,
		"fallback": "solar:user-hands-bold",
	});
}

export default Component;
