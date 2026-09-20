import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j58xd_syr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j58xd_syr"/>`,
		"fallback": "la:openid",
	});
}

export default Component;
