import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td7o5qxkz.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td7o5qxkz"/>`,
		"fallback": "topcoat:videocamera",
	});
}

export default Component;
