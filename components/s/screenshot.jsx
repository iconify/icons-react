import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uey1fclew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uey1fclew"/>`,
		"fallback": "tabler:screenshot",
	});
}

export default Component;
