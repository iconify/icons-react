import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_nd3rw4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_nd3rw4o"/>`,
		"fallback": "tabler:square-rounded-letter-o-filled",
	});
}

export default Component;
