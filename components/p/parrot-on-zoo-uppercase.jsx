import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h57cxjb1g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h57cxjb1g"/>`,
		"fallback": "pinhead:parrot-on-zoo-uppercase",
	});
}

export default Component;
