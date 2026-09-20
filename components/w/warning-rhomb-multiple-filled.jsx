import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2gjix1mg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2gjix1mg"/>`,
		"fallback": "ix:warning-rhomb-multiple-filled",
	});
}

export default Component;
