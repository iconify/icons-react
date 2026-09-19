import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u15sy9b8v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u15sy9b8v"/>`,
		"fallback": "at-icons:pipette",
	});
}

export default Component;
