import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b556pqxyw.css';
import '../../css/l/l3hxi7bhe.css';
import '../../css/y/y7mxs0lsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b556pqxyw"/><path class="l3hxi7bhe"/><path class="y7mxs0lsz"/>`,
		"fallback": "famicons:speedometer-outline",
	});
}

export default Component;
