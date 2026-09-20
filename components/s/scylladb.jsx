import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bezqb2i-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bezqb2i-k"/>`,
		"fallback": "thesvg:scylladb",
	});
}

export default Component;
