import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr5w0b1hl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr5w0b1hl"/>`,
		"fallback": "fluent-mdl2:photo-2",
	});
}

export default Component;
