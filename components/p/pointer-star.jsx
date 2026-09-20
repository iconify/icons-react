import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr3sdwb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr3sdwb0e"/>`,
		"fallback": "tabler:pointer-star",
	});
}

export default Component;
