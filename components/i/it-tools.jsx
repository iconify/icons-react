import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty2gosb3o.css';
import '../../css/j/j70cc-b_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty2gosb3o"/><path class="j70cc-b_m"/>`,
		"fallback": "selfhst:it-tools",
	});
}

export default Component;
