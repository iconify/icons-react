import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua7jkmr3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua7jkmr3h"/>`,
		"fallback": "file-icons:rascal",
	});
}

export default Component;
