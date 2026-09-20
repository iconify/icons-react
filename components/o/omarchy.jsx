import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g18k-ebop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g18k-ebop"/>`,
		"fallback": "thesvg:omarchy",
	});
}

export default Component;
