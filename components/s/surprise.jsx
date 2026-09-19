import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciwwc7f0g.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciwwc7f0g"/>`,
		"fallback": "fa-solid:surprise",
	});
}

export default Component;
