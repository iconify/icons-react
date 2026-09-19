import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cok6hld-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cok6hld-n"/>`,
		"fallback": "famicons:toggle-sharp",
	});
}

export default Component;
