import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0po3xb8t.css';
import '../../css/b/bsha2ob5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0po3xb8t"/><path class="bsha2ob5a"/>`,
		"fallback": "ion:ios-bed",
	});
}

export default Component;
