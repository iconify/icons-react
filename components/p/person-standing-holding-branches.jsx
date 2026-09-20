import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2tc4bb6i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2tc4bb6i"/>`,
		"fallback": "pinhead:person-standing-holding-branches",
	});
}

export default Component;
