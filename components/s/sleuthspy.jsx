import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw9wxrrim.css';
import '../../css/j/jlz7a01mh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw9wxrrim"/><path class="jlz7a01mh"/>`,
		"fallback": "fxemoji:sleuthspy",
	});
}

export default Component;
