import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el2kicbta.css';
import '../../css/f/fs0bxbjar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el2kicbta"/><path class="fs0bxbjar"/>`,
		"fallback": "selfhst:nextcloud-talk",
	});
}

export default Component;
