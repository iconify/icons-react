import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6t6jkvfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6t6jkvfu"/>`,
		"fallback": "ix:list-sorted",
	});
}

export default Component;
