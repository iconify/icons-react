import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-y-j6fsj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-y-j6fsj"/>`,
		"fallback": "fluent-mdl2:transition-effect",
	});
}

export default Component;
