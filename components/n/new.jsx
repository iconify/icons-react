import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np-3k1nzg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np-3k1nzg"/>`,
		"fallback": "entypo:new",
	});
}

export default Component;
