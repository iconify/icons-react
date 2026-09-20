import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br3r0diof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br3r0diof"/>`,
		"fallback": "selfhst:jstor-dark",
	});
}

export default Component;
