import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo87m9b3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo87m9b3m"/>`,
		"fallback": "ion:logo-polymer",
	});
}

export default Component;
