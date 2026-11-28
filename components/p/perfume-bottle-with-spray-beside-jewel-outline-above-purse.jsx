import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo8k2rb4s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo8k2rb4s"/>`,
		"fallback": "pinhead:perfume-bottle-with-spray-beside-jewel-outline-above-purse",
	});
}

export default Component;
