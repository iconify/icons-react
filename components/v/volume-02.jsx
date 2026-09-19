import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lti3lcbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lti3lcbjt"/>`,
		"fallback": "hugeicons:volume-02",
	});
}

export default Component;
