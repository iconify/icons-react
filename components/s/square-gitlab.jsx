import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1xdd0bmh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1xdd0bmh"/>`,
		"fallback": "fa6-brands:square-gitlab",
	});
}

export default Component;
