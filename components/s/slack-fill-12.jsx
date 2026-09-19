import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c916p865d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c916p865d"/>`,
		"fallback": "garden:slack-fill-12",
	});
}

export default Component;
