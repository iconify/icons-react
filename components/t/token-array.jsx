import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jczgum2rv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jczgum2rv"/>`,
		"fallback": "oui:token-array",
	});
}

export default Component;
