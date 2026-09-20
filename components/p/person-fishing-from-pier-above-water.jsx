import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhezw0uiz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhezw0uiz"/>`,
		"fallback": "pinhead:person-fishing-from-pier-above-water",
	});
}

export default Component;
