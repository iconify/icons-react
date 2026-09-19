import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l71al9aji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l71al9aji"/>`,
		"fallback": "fa6-solid:person-snowboarding",
	});
}

export default Component;
