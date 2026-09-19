import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueju9xbpo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueju9xbpo"/>`,
		"fallback": "f7:viewfinder",
	});
}

export default Component;
