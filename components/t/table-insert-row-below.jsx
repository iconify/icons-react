import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we20sebpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="we20sebpt"/>`,
		"fallback": "ix:table-insert-row-below",
	});
}

export default Component;
