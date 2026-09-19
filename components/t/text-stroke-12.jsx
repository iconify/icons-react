import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a103id3vv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a103id3vv"/>`,
		"fallback": "garden:text-stroke-12",
	});
}

export default Component;
