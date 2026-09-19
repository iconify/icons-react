import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyl-3tbdi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyl-3tbdi"/>`,
		"fallback": "fa7-solid:mobile-retro",
	});
}

export default Component;
