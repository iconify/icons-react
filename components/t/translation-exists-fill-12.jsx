import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-xwh2pf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-xwh2pf"/>`,
		"fallback": "garden:translation-exists-fill-12",
	});
}

export default Component;
