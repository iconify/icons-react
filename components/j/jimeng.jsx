import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p31g56bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p31g56bgf"/>`,
		"fallback": "thesvg:jimeng",
	});
}

export default Component;
