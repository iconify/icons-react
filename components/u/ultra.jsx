import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu5troc5n.css';
import '../../css/u/unhe2tbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu5troc5n"/><path class="unhe2tbbq"/>`,
		"fallback": "token:ultra",
	});
}

export default Component;
