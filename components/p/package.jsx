import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntry6-bsz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntry6-bsz"/>`,
		"fallback": "fluent-mdl2:package",
	});
}

export default Component;
