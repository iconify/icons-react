import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3j_yjh3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3j_yjh3p"/>`,
		"fallback": "cbi:livingroom-group",
	});
}

export default Component;
