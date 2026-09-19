import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1fac2bfl.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1fac2bfl"/>`,
		"fallback": "fa:times-circle-o",
	});
}

export default Component;
