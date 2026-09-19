import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jikhc-6ib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jikhc-6ib"/>`,
		"fallback": "file-icons:meteor",
	});
}

export default Component;
