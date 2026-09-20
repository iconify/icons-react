import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_xn3hb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_xn3hb7i"/>`,
		"fallback": "tabler:message-circle-minus",
	});
}

export default Component;
