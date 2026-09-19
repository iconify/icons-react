import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9bu5bvyt.css';
import '../../css/y/yt6itvbtt.css';
import '../../css/l/lubiopb0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9bu5bvyt"/><path class="yt6itvbtt"/><path class="lubiopb0k"/></g>`,
		"fallback": "fluent-emoji-flat:page-with-curl",
	});
}

export default Component;
