import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol18m9l3x.css';
import '../../css/r/rhyynac5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol18m9l3x"/><path class="rhyynac5v"/>`,
		"fallback": "ion:md-boat",
	});
}

export default Component;
