import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-xue7lql.css';
import '../../css/r/rh9letwnk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-xue7lql"/><path class="rh9letwnk"/>`,
		"fallback": "famicons:volume-high-sharp",
	});
}

export default Component;
