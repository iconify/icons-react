import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jicenlb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jicenlb9s"/>`,
		"fallback": "solar:pipette-broken",
	});
}

export default Component;
