import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqp_wzb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqp_wzb6s"/>`,
		"fallback": "cbi:peugeot-alt",
	});
}

export default Component;
