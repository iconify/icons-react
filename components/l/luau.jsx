import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsqr_kr0l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsqr_kr0l"/>`,
		"fallback": "devicon-plain:luau",
	});
}

export default Component;
