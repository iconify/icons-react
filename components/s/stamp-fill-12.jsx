import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4d8bzb3p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4d8bzb3p"/>`,
		"fallback": "garden:stamp-fill-12",
	});
}

export default Component;
