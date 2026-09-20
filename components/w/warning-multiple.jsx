import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km15ajb9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="km15ajb9w"/>`,
		"fallback": "ix:warning-multiple",
	});
}

export default Component;
