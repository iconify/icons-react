import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld8aljbvd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld8aljbvd"/>`,
		"fallback": "fa7-brands:square-font-awesome",
	});
}

export default Component;
