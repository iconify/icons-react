import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-u3txb-m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-u3txb-m"/>`,
		"fallback": "f7:viewfinder-circle-fill",
	});
}

export default Component;
