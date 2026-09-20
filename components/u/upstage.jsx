import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr7sejb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr7sejb1b"/>`,
		"fallback": "thesvg:upstage",
	});
}

export default Component;
