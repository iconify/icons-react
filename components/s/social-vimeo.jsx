import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkjl32khw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wkjl32khw"/>`,
		"fallback": "ion:social-vimeo",
	});
}

export default Component;
