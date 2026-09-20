import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbfdw7brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbfdw7brz"/>`,
		"fallback": "thesvg:prezi",
	});
}

export default Component;
