import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwo4gqime.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwo4gqime"/>`,
		"fallback": "garden:sandbox-stroke-12",
	});
}

export default Component;
