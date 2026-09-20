import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwjl9f13w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwjl9f13w"/>`,
		"fallback": "map:open-captioning",
	});
}

export default Component;
