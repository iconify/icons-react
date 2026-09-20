import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6syj0blk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6syj0blk"/>`,
		"fallback": "simple-line-icons:social-spotify",
	});
}

export default Component;
