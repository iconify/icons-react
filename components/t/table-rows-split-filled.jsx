import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocsa8ub0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocsa8ub0n"/>`,
		"fallback": "boxicons:table-rows-split-filled",
	});
}

export default Component;
