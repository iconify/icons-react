import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2vigwbeq.css';
import '../../css/j/jwwa9k2ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2vigwbeq"/><path class="jwwa9k2ew"/>`,
		"fallback": "ion:ios-cloud-upload",
	});
}

export default Component;
