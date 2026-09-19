import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbz-ytbid.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbz-ytbid"/>`,
		"fallback": "fa7-solid:money-bill-wave",
	});
}

export default Component;
