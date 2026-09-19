import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrw4_bbaf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrw4_bbaf"/>`,
		"fallback": "ion:md-done-all",
	});
}

export default Component;
