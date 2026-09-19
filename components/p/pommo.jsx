import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idyq0ib-r.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idyq0ib-r"/>`,
		"fallback": "whh:pommo",
	});
}

export default Component;
