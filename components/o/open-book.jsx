import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki3qabcfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki3qabcfq"/>`,
		"fallback": "entypo:open-book",
	});
}

export default Component;
