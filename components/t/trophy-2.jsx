import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_3oa0b-l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_3oa0b-l"/>`,
		"fallback": "fluent-mdl2:trophy-2",
	});
}

export default Component;
