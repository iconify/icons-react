import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9wtobbqu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9wtobbqu"/>`,
		"fallback": "marketeq:voice",
	});
}

export default Component;
