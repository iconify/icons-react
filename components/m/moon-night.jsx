import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4evc5b5u.css';
import '../../css/t/tmkh_-28d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4evc5b5u"/><path class="tmkh_-28d"/>`,
		"fallback": "ep:moon-night",
	});
}

export default Component;
