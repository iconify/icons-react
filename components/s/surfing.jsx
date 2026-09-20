import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nopl6cb-d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nopl6cb-d"/>`,
		"fallback": "map:surfing",
	});
}

export default Component;
