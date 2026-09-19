import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z23109bwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z23109bwk"/>`,
		"fallback": "fluent-emoji-high-contrast:page-with-curl",
	});
}

export default Component;
