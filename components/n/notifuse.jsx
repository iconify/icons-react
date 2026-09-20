import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm86fbbey.css';
import '../../css/c/c6ug3vbfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm86fbbey"/><path class="c6ug3vbfo"/>`,
		"fallback": "selfhst:notifuse",
	});
}

export default Component;
