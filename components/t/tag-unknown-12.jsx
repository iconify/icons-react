import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybvce78ls.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybvce78ls"/>`,
		"fallback": "fluent-mdl2:tag-unknown-12",
	});
}

export default Component;
