import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufbk1cboi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufbk1cboi"/>`,
		"fallback": "ix:package",
	});
}

export default Component;
