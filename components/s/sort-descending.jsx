import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbx43lh7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbx43lh7a"/>`,
		"fallback": "ix:sort-descending",
	});
}

export default Component;
