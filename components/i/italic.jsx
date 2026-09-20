import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylqe2jbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylqe2jbpe"/>`,
		"fallback": "tabler:italic",
	});
}

export default Component;
