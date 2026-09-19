import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maqn9jbuy.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maqn9jbuy"/>`,
		"fallback": "fa-regular:lightbulb",
	});
}

export default Component;
