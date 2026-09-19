import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag6ih3byy.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag6ih3byy"/>`,
		"fallback": "zmdi:tv",
	});
}

export default Component;
