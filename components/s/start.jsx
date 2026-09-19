import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7lh-6b4x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7lh-6b4x"/>`,
		"fallback": "bytesize:start",
	});
}

export default Component;
