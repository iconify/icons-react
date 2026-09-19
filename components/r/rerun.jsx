import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiflbzb4v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiflbzb4v"/>`,
		"fallback": "fluent-mdl2:rerun",
	});
}

export default Component;
