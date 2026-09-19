import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5lzyde5j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5lzyde5j"/>`,
		"fallback": "fluent-mdl2:page-edit",
	});
}

export default Component;
