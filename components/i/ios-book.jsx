import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l99r3d5dl.css';
import '../../css/a/a4x7enbjd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l99r3d5dl"/><path class="a4x7enbjd"/>`,
		"fallback": "ion:ios-book",
	});
}

export default Component;
