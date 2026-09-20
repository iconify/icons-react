import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ski76bcvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ski76bcvd"/>`,
		"fallback": "uit:linkedin-alt",
	});
}

export default Component;
