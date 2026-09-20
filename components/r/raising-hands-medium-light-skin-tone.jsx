import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9wzftb8q.css';
import '../../css/u/ukny4u-mq.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9wzftb8q"/><path class="ukny4u-mq"/><path class="v2yh4c2xt"/>`,
		"fallback": "openmoji:raising-hands-medium-light-skin-tone",
	});
}

export default Component;
