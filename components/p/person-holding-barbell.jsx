import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg24q37mt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg24q37mt"/>`,
		"fallback": "pinhead:person-holding-barbell",
	});
}

export default Component;
