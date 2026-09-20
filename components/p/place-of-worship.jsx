import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogg4ex6bi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogg4ex6bi"/>`,
		"fallback": "map:place-of-worship",
	});
}

export default Component;
