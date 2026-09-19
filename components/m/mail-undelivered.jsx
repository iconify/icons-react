import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syv9txlxb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syv9txlxb"/>`,
		"fallback": "fluent-mdl2:mail-undelivered",
	});
}

export default Component;
