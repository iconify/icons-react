import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksos72b1n.css';
import '../../css/d/drkyefbiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksos72b1n"/><path class="drkyefbiz"/>`,
		"fallback": "carbon:outage",
	});
}

export default Component;
