import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkyg6sb7u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkyg6sb7u"/>`,
		"fallback": "fa7-solid:plate-wheat",
	});
}

export default Component;
