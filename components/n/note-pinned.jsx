import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqae2nbon.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqae2nbon"/>`,
		"fallback": "fluent-mdl2:note-pinned",
	});
}

export default Component;
