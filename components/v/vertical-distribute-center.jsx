import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn8j55bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn8j55bys"/>`,
		"fallback": "boxicons:vertical-distribute-center",
	});
}

export default Component;
