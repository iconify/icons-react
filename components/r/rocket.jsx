import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg2rmmb8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg2rmmb8k"/>`,
		"fallback": "entypo:rocket",
	});
}

export default Component;
