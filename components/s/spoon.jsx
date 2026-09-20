import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt9f0cb0i.css';
import '../../css/b/brrdf9bhm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt9f0cb0i"/><path class="brrdf9bhm"/>`,
		"fallback": "openmoji:spoon",
	});
}

export default Component;
