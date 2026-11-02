import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_kg-bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac_kg-bls"/>`,
		"fallback": "mingcute:movie-line",
	});
}

export default Component;
