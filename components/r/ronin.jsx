import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bha5ecbwn.css';
import '../../css/p/p078on3jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bha5ecbwn"/><path clip-rule="evenodd" class="p078on3jf"/>`,
		"fallback": "token:ronin",
	});
}

export default Component;
