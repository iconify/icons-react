import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbou95b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbou95b_g"/>`,
		"fallback": "reicon:rotate-left-filled",
	});
}

export default Component;
