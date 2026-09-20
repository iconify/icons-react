import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy9xttbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy9xttbrt"/>`,
		"fallback": "thesvg-color:metacritic",
	});
}

export default Component;
