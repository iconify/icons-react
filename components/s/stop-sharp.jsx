import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0m8oyg9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0m8oyg9i"/>`,
		"fallback": "famicons:stop-sharp",
	});
}

export default Component;
