import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn-zulx8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn-zulx8q"/>`,
		"fallback": "keyline-icons:link",
	});
}

export default Component;
