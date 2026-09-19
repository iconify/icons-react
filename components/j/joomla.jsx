import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrf76ybrb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrf76ybrb"/>`,
		"fallback": "icomoon-free:joomla",
	});
}

export default Component;
