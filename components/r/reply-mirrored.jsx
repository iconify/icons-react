import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovslp8rsh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovslp8rsh"/>`,
		"fallback": "fluent-mdl2:reply-mirrored",
	});
}

export default Component;
