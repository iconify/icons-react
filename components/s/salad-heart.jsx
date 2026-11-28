import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rry400bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rry400bso"/>`,
		"fallback": "noviair:salad-heart",
	});
}

export default Component;
