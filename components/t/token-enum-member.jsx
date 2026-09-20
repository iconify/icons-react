import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plvw6ybat.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plvw6ybat"/>`,
		"fallback": "oui:token-enum-member",
	});
}

export default Component;
