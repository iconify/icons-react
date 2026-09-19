import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhqk2bbtv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhqk2bbtv"/>`,
		"fallback": "fa6-solid:mill-sign",
	});
}

export default Component;
