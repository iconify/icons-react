import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr9y_5b1k.css';

const viewBox = {"width":69.5,"height":59};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr9y_5b1k"/>`,
		"fallback": "thesvg:ramp",
	});
}

export default Component;
