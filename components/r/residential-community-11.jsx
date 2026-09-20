import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4s140a6x.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4s140a6x"/>`,
		"fallback": "maki:residential-community-11",
	});
}

export default Component;
