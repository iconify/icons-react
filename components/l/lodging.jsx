import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt10m0b2v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt10m0b2v"/>`,
		"fallback": "map:lodging",
	});
}

export default Component;
