import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv7-lq6zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv7-lq6zj"/>`,
		"fallback": "cbi:liane",
	});
}

export default Component;
