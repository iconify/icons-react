import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljrl82byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljrl82byx"/>`,
		"fallback": "boxicons:radar",
	});
}

export default Component;
