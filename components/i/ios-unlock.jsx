import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txvldt9ed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txvldt9ed"/>`,
		"fallback": "ion:ios-unlock",
	});
}

export default Component;
