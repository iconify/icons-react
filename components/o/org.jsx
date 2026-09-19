import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tult9pigf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tult9pigf"/>`,
		"fallback": "fluent-mdl2:org",
	});
}

export default Component;
