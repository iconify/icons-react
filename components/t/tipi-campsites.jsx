import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6i-o7wkj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6i-o7wkj"/>`,
		"fallback": "pinhead:tipi-campsites",
	});
}

export default Component;
