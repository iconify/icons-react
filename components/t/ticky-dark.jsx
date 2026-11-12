import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx46o0t2b.css';
import '../../css/j/jud9kib8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx46o0t2b"/><path class="jud9kib8r"/>`,
		"fallback": "selfhst:ticky-dark",
	});
}

export default Component;
