import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lry9t6b-k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lry9t6b-k"/>`,
		"fallback": "fluent-mdl2:note-reply",
	});
}

export default Component;
