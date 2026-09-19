import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2nqf8t8e.css';
import '../../css/v/vqb--ibgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2nqf8t8e"/><path class="vqb--ibgd"/>`,
		"fallback": "ion:logo-closed-captioning-outline",
	});
}

export default Component;
