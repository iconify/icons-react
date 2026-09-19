import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnmne6b8u.css';
import '../../css/b/bsqtkvrgn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnmne6b8u"/><path class="bsqtkvrgn"/>`,
		"fallback": "carbon:recently-viewed",
	});
}

export default Component;
