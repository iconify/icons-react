import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwu7sxc3o.css';
import '../../css/n/nl5r9mbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwu7sxc3o"/><path clip-rule="evenodd" class="nl5r9mbkv"/>`,
		"fallback": "stash:social-twitter-duotone",
	});
}

export default Component;
