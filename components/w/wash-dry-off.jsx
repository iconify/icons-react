import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg7rb9b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg7rb9b8d"/>`,
		"fallback": "tabler:wash-dry-off",
	});
}

export default Component;
