import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we9u1gzwf.css';
import '../../css/j/jf-7ccbdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we9u1gzwf"/><path class="jf-7ccbdc"/>`,
		"fallback": "selfhst:octelium",
	});
}

export default Component;
