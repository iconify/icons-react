import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3m_nk0lf.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3m_nk0lf"/>`,
		"fallback": "vs:no-comment-bubble",
	});
}

export default Component;
