import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k18y-k1ul.css';
import '../../css/c/c4kqgrv6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k18y-k1ul"/><path class="c4kqgrv6k"/>`,
		"fallback": "circum:parking-1",
	});
}

export default Component;
