import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov7c-h-ha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov7c-h-ha"/>`,
		"fallback": "selfhst:proxcenter-light",
	});
}

export default Component;
