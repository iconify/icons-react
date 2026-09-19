import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfjg4ccyt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfjg4ccyt"/>`,
		"fallback": "devicon-plain:lodash",
	});
}

export default Component;
