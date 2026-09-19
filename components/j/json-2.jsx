import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qquo4fqes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qquo4fqes"/>`,
		"fallback": "file-icons:json-2",
	});
}

export default Component;
