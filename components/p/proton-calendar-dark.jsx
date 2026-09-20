import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_mutobdf.css';
import '../../css/x/x0zug3lhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_mutobdf"/><path class="x0zug3lhg"/>`,
		"fallback": "selfhst:proton-calendar-dark",
	});
}

export default Component;
