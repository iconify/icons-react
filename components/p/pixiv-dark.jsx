import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f69_d7b-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f69_d7b-m"/>`,
		"fallback": "selfhst:pixiv-dark",
	});
}

export default Component;
