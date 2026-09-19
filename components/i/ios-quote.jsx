import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0uyplao.css';
import '../../css/v/volv26bxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0uyplao"/><path class="volv26bxm"/>`,
		"fallback": "ion:ios-quote",
	});
}

export default Component;
