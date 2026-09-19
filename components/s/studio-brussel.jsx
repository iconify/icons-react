import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo5tqac8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo5tqac8f"/>`,
		"fallback": "cbi:studio-brussel",
	});
}

export default Component;
