import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe6a_3byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe6a_3byp"/>`,
		"fallback": "tabler:users-minus",
	});
}

export default Component;
