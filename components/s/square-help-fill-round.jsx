import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h368z8r3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h368z8r3v"/>`,
		"fallback": "coolicons:square-help-fill-round",
	});
}

export default Component;
