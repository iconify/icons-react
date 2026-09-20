import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5i3ru5ze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5i3ru5ze"/>`,
		"fallback": "subway:title",
	});
}

export default Component;
